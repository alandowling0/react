import React, { Component } from 'react';
import {UserListItem} from './UserListItem';
import {RepoList} from './RepoList';
import { connect } from 'react-redux';
import axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userRepos: []
        }
    }

    componentDidMount() {
        let githubReposQuery = "https://api.github.com/users";
        githubReposQuery += ("/" + this.props.match.params.user + "/repos");
        githubReposQuery += ("?sort=updated")
        
        axios.get(githubReposQuery)
            .then(this.handleQueryResult.bind(this))
            .catch(this.handleQueryError.bind(this));
    }

    handleQueryResult(result) {
        const repos = result.data.map((repo) => {

            const updated = new Date(repo.updated_at);
            const now = new Date();

            const timeSinceLastUpdate = new Date(now - updated);

            const minutesSinceUpdate = timeSinceLastUpdate / 60000;
            const hoursSinceUpdate = minutesSinceUpdate / 60;
            const daysSinceUpdate = hoursSinceUpdate / 24;
            const yearsSinceUpdate = daysSinceUpdate / 365;

            let timeSinceUpdate = "";
            if(Math.floor(yearsSinceUpdate) > 1) {
                timeSinceUpdate = "Over " + Math.floor(yearsSinceUpdate) + " years ago";
            }
            else if(Math.floor(daysSinceUpdate) > 1) {
                timeSinceUpdate = Math.floor(daysSinceUpdate) + " days ago";
            }
            else if(Math.floor(hoursSinceUpdate) > 1) {
                timeSinceUpdate = Math.floor(hoursSinceUpdate) + " hours ago";
            }
            else {
                timeSinceUpdate = Math.floor(minutesSinceUpdate) + " minutes ago";
            }

            console.log(timeSinceLastUpdate)

            return {
                name: repo.name,
                updated: timeSinceUpdate
            }
        });

        this.setState({
            userRepos: repos
        });
    }

    handleQueryError(error) {
        console.log(error);
    }

    image() {
        const user = this.props.users.find((user)=>{
            return user.name === this.props.match.params.user
        })

        return user.image;
    }

    render() {
        const backgroundStyle = {
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#718093"
        }

        const contentAreaStyle = {
            height: this.props.height * 0.8,
            width: this.props.width * 0.9,
            backgroundColor: "#7f8fa6",
            borderRadius: 10
        }

        const headerAreaStyle = {
            height: contentAreaStyle.height * 0.2,
            width: contentAreaStyle.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }

        const listAreaStyle = {
            height: contentAreaStyle.height * 0.8,
            width: contentAreaStyle.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }

        return (
            <div style={backgroundStyle}>
                <div style={contentAreaStyle}>
                    <div style={headerAreaStyle}>
                        <UserListItem 
                            height={headerAreaStyle.height}
                            width={headerAreaStyle.width}
                            name={this.props.match.params.user} 
                            image={this.image()}>
                        </UserListItem>
                    </div>
                    <div style={listAreaStyle}>
                        <RepoList 
                            repos={this.state.userRepos}
                            height={listAreaStyle.height}
                            width={listAreaStyle.width}>
                        </RepoList>    
                    </div>
                </div> 
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
        users: state.searchResult.users
    }
}

export default connect(mapStateToProps)(Details);