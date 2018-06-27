import React, { Component } from 'react';

export class UserListItem extends Component { 
    render() {
        const containerStyle = {
            backgroundColor: "pink",
            borderWidth: "1px",
            borderStyle: "solid",
            height: this.props.height,
            width: this.props.width
        }
    
        const imageAreaStyle = {
            height: containerStyle.height,
            width: containerStyle.height,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left"
        };
    
        const imageStyle = {
            width: imageAreaStyle.width * 0.8,
            height: imageAreaStyle.height * 0.8,
        };
    
        const nameStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            float: "left",
            height: containerStyle.height
        }

        return (
            <div style={containerStyle} onClick={this.props.onClicked}>
                <div style={imageAreaStyle}>
                    <img style={imageStyle} src={this.props.image} alt="mugshot"/>
                </div>
                <div style={nameStyle}>
                    <div>{this.props.name}</div>
                    <div>Points: {this.props.points}</div>
                </div>
            </div>
        );
    }   
}