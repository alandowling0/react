import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AddProduct} from './AddProduct';
import {ProductList} from './ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Alan, Welcome to React</h1>
        </header>
        <div>
          <AddProduct></AddProduct>          
        </div>
        <div>
          <ProductList></ProductList>
        </div>
      </div>
    );
  }
}

export default App;
