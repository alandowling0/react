import React, { Component } from 'react';

export class RepoListItem extends Component { 
    render() {
        const backgroundStyle = {
            backgroundColor: "pink",
            borderWidth: "1px",
            borderStyle: "solid",
            height: this.props.height,
            width: this.props.width
        }
    
        const nameAreaStyle = {
            borderStyle: "solid",
            borderWidth: "1px",
            borderColour: "green",
            height: backgroundStyle.height,
            width: backgroundStyle.width * 0.49,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left"
        };

        const updatedAreaStyle = {
            borderStyle: "solid",
            borderWidth: "1px",
            borderColour: "red",
            height: backgroundStyle.height,
            width: backgroundStyle.width * 0.49,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left"
        };

        return (
            <div style={backgroundStyle}>
                <div style={nameAreaStyle}>
                    <div>{this.props.name}</div>
                </div>
                <div style={updatedAreaStyle}>
                    <div>{this.props.updated}</div>
                </div>
            </div>
        );
    }   
}