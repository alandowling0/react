import React, { Component } from 'react';
import {AddProduct} from './AddProduct';
import {ProductList} from './ProductList';

export class Cart extends Component {
  render() {
    return (
        <div>
            <AddProduct addProduct={this.props.onAddProduct}></AddProduct>          
            <ProductList products={this.props.cartItems} deleteProduct={this.props.onDeleteProduct}></ProductList>
        </div>
    );
  }
}
