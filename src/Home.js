import React, { Component } from 'react';

export class Home extends Component {

    onDetailsButtonClicked() {
        this.props.history.push("/details");
    }

    render() {
        let backgroundAreaStyle = {
            backgroundColor: "lightblue",
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };

        let contentAreaStyle = {
            backgroundColor: "lightgreen",
            height: backgroundAreaStyle.height * 0.8,
            width: backgroundAreaStyle.width * 0.8
        };

        let topBarStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "red",
            height: contentAreaStyle.height * 0.1
        };

        let tableAreaStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "blue",
            height: contentAreaStyle.height * 0.9
        };

        return (
        <div style={backgroundAreaStyle}>
            <div style={contentAreaStyle}>
                <div style={topBarStyle}>
                    <button onClick={this.onDetailsButtonClicked.bind(this)}>Details</button>
                </div>
                <div style={tableAreaStyle}>Table Area</div>
            </div>
        </div>
        );
    }   
}