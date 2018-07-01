import React, { Component } from 'react';

export class UserListItem extends Component { 
    render() {
        const containerStyle = {
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
    
        const nameAreaStyle = {
            height: containerStyle.height,
            width: containerStyle.width - imageAreaStyle.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left",
            fontSize: containerStyle.height * 0.3
        }

        return (
            <div style={containerStyle} onClick={this.props.onClicked}>
                <div style={imageAreaStyle}>
                    <img style={imageStyle} src={this.props.image} alt="mugshot"/>
                </div>
                <div style={nameAreaStyle}>
                    <div>{this.props.name}</div>
                </div>
            </div>
        );
    }   
}