import React, { Component } from 'react';
import {UserListItem} from './UserListItem';

export class Details extends Component {
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
                    name={this.props.name} 
                    points={this.props.points} 
                    image={this.props.image}>
                </UserListItem>
            </div>
        );
    }   
}