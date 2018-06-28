import React, { Component } from 'react';
import {UserListItem} from './UserListItem';
import { connect } from 'react-redux';
import axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userRepos: []   
        };
    }

    componentDidMount() {
        let githubReposQuery = "https://api.github.com/users";
        githubReposQuery += ("/" + this.props.selectedUser.name + "/repos");
        
        axios.get(githubReposQuery)
            .then((result) => {
                
                let repos = result.data.map(repo => repo.name)
                this.setState({
                    userRepos: repos
                });
                console.log(repos)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const backgroundStyle = {
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgreen"
        }
        return (
            <div style={backgroundStyle}>
                <UserListItem 
                    height={this.props.height * 0.5}
                    width={this.props.width * 0.8}
                    name={this.props.selectedUser.name} 
                    points={this.state.userRepos} 
                    image={this.props.selectedUser.image}>
                </UserListItem>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
        selectedUser: state.selectedUser
    }
}

export default connect(mapStateToProps)(Details);