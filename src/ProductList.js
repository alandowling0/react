import React, { Component } from 'react';
import {ProductListItem} from './ProductListItem'

export class ProductList extends Component {
    render() {
        return (
            <div>
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => {
                            return <ProductListItem 
                                key={product.name} 
                                name={product.name} 
                                price={product.price} 
                                deleteProduct={this.props.deleteProduct}
                                />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}