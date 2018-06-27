import React, { Component } from 'react';
import { connect } from 'react-redux'
import { UserListItem } from './UserListItem';

class UserList extends Component {

    clickHandler(user) {
        return () => {
            this.props.selectUser(user);
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
                        onClicked={this.clickHandler(user)}
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