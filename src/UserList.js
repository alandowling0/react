import React, { Component } from 'react';
import {UserListItem} from './UserListItem';

export class UserList extends Component {

    userData = [
        {name: "Alan", points: 123, image: "face.jpg"},
        {name: "Isabel", points: 2323, image: "face.jpg"},
        {name: "Robert", points: 343, image: "face.jpg"},
        {name: "Sara", points: 434, image: "face.jpg"},
        {name: "Michelle", points: 1222, image: "face.jpg"},
        {name: "Marta", points: 111, image: "face.jpg"},
        {name: "Rohan", points: 288, image: "face.jpg"},
        {name: "Elsie", points: 76, image: "face.jpg"},
        {name: "Tony", points: 384, image: "face.jpg"},
        {name: "Albert", points: 222, image: "face.jpg"},
    ];

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
                {this.userData.map((user, index) => {
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