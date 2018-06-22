import React, { Component } from 'react';

export class AddProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: 0
        }
    }

    onNameChanged(event) {
        this.setState({name: event.target.value})
    }

    onPriceChanged(event) {
        this.setState({price: parseInt(event.target.value)})
    }

    render() {
        return (
            <div>
                <input 
                    type="text"
                    placeholder="Product Name"
                    value={this.state.name}
                    onChange={this.onNameChanged.bind(this)}
                />
                <input 
                    type="number"
                    value={this.state.price}
                    onChange={this.onPriceChanged.bind(this)}
                />
                <button onClick={() => {
                    if(this.state.name.length > 0) {
                        this.props.addProduct(this.state.name, this.state.price);
                    }
                }}>AddProduct</button>
            </div>
        )
    }
} 