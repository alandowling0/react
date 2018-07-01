import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { UserListItem } from './UserListItem';

export class UserList extends Component {

    componentDidUpdate() {
        ReactDOM.findDOMNode(this).scrollTop = 0;
    }

    render() {
        const listStyle = {
            height: this.props.height,
            overflow:"hidden",
            overflowY:"scroll",
            margin: "0px",
        };

        return (
            <div style={listStyle}>
                {this.props.users.map((user) => {
                    return <UserListItem 
                        onClicked={() => this.props.history.push("/details/" + user.name)}
                        height={100} 
                        width={this.props.width} 
                        name={user.name}  
                        image={user.image} 
                        key={user.name}>
                    </UserListItem>
                })}
            </div>
        );
    }   
}
