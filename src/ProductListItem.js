import React, { Component } from 'react';

export class ProductListItem extends Component {

    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>
                    <button onClick={() => {
                        this.props.deleteProduct(this.props.name)
                    }}>Remove</button>
                </td>
            </tr>
        )
    }
}