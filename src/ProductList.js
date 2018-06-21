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
                        <ProductListItem name="Learn React" price={19}/>
                        <ProductListItem name="Learn Angular" price={19}/>
                        <ProductListItem name="Learn Ionic" price={17}/>
                    </tbody>
                </table>
            </div>
        )
    }
}