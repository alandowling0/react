import React, { Component } from 'react';

export class AddProduct extends Component {
    onClick() {
        console.log("clicked add")
    }

    render() {
        return (
            <div>
                <input type="text"/>
                <input type="number"/>
                <button onClick={this.onClick.bind(this)}>AddProduct</button>
            </div>
        )
    }
}