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
        
        axios.get(githubReposQuery)
            .then(this.handleQueryResult.bind(this))
            .catch(this.handleQueryError.bind(this));
    }

    handleQueryResult(result) {
        const repos = result.data.map((repo) => {
            return {
                name: repo.name,
                updated: repo.updated_at
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