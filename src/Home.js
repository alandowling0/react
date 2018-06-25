import React, { Component } from 'react';

export class Home extends Component {

    onDetailsButtonClicked() {
        this.props.history.push("/details");
    }

    render() {
        return (
        <div>
            <div>Home Page</div>
            <button onClick={this.onDetailsButtonClicked.bind(this)}>Details</button>
        </div>
        );
    }   
}