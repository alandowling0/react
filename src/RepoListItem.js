import React, { Component } from 'react';

export class RepoListItem extends Component { 
    render() {
        const backgroundStyle = {
            height: this.props.height,
            width: this.props.width
        }
    
        const nameAreaStyle = {
            height: backgroundStyle.height,
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left",
            
        };

        const updatedAreaStyle = {
            height: backgroundStyle.height,
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            float: "left",
        };

        const textStyle = {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: backgroundStyle.height * 0.3
        }

        return (
            <div style={backgroundStyle}>
                <div style={nameAreaStyle}>
                    <div style={textStyle}>{this.props.name}</div>
                </div>
                <div style={updatedAreaStyle}>
                    <div style={textStyle}>{this.props.updated}</div>
                </div>
            </div>
        );
    }   
}