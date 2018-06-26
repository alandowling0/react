import React, { Component } from 'react';
import {UserListItem} from './UserListItem';
import axios from 'axios';

export class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        this.getGitHubData("alan")
    }

    getGitHubData(searchTerm) {
        axios.get("https:api.github.com/search/users?q="+searchTerm)
            .then(this.updateUserData.bind(this));
    }

    updateUserData(result) {
        const items = result.data.items;
        console.log(items);

        const newUserData = items.map(item => {
            return {
                name: item.login,
                points: item.score,
                image: item.avatar_url
            }
        });

        this.setState({userData: newUserData});
    }

    render() {
        const listStyle = {
            height: this.props.height,
            backgroundColor: "red",
            overflow:"hidden",
            overflowY:"scroll",
            margin: "0px",
        };

        return (
            <div style={listStyle}>
                {this.state.userData.map((user, index) => {
                    return <UserListItem 
                        height={100} 
                        width={this.props.width} 
                        name={user.name} 
                        points={user.points} 
                        image={user.image} 
                        key={index}>
                    </UserListItem>
                })}
            </div>
        );
    }   
}