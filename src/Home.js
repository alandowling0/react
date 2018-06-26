import React, { Component } from 'react';
import {UserList} from './UserList';
 
export class Home extends Component {

    render() {
        const backgroundAreaStyle = {
            backgroundColor: "lightblue",
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
    
        const contentAreaStyle = {
            backgroundColor: "lightgreen",
            height: backgroundAreaStyle.height * 0.8,
            width: backgroundAreaStyle.width * 0.8
        };
    
        const topBarStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "red",
            height: contentAreaStyle.height * 0.1
        };
    
        const tableAreaStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "blue",
            height: contentAreaStyle.height * 0.9
        };

        return (
            <div style={backgroundAreaStyle}>
                <div style={contentAreaStyle}>
                    <div style={topBarStyle}/>
                    <div style={tableAreaStyle}>
                        <UserList height={tableAreaStyle.height} width={contentAreaStyle.width} history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }   
}