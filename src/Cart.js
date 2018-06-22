import React, { Component } from 'react';
import {AddProduct} from './AddProduct';
import {ProductList} from './ProductList';
import {Checkout} from './Checkout';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

export class Cart extends Component {
    totalCost() {
        return this.props.cartItems.reduce((accumulator, item) => {
            return accumulator + item.price
        }, 0)
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/checkout" render = {() => <Checkout text="qwertyuiop"/>}/>
                        <Route path="/" render = {() =>{
                            return (<div>
                                <AddProduct addProduct={this.props.onAddProduct}></AddProduct>          
                                <ProductList products={this.props.cartItems} deleteProduct={this.props.onDeleteProduct}></ProductList>
                                <div>{this.totalCost()}</div>
                            </div>)
                            }}/>
                    </Switch>
                </div>            
            </BrowserRouter>
        );
    }
}
