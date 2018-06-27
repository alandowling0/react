import React, { Component } from 'react';
import { connect } from 'react-redux'
import { UserListItem } from './UserListItem';
import axios from 'axios';

class UserList extends Component {

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

        this.props.setUsers(newUserData);
    }

    clickHandler(index) {
        return () => {
            this.props.selectUser(index);
            this.props.history.push("/details");
        }
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
                {this.props.users.map((user, index) => {
                    return <UserListItem 
                        onClicked={this.clickHandler(index)}
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

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUsers: (users) => {
            dispatch(
                {
                    type: "SET_USERS",
                    payload: users
                }
            )
        },
        selectUser: (selectedUser) => {
            dispatch(
                {
                    type: "SELECT_USER",
                    payload: selectedUser
                }
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);