import React, { Component } from 'react';

export class ProductListItem extends Component {

    onClick() {
        console.log("clicked", this.props.name)
    }

    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>
                    <button onClick={this.onClick.bind(this)}>Remove</button>
                </td>
            </tr>
        )
    }
}