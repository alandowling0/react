import React, { Component } from 'react';

export class Login extends Component {

    onLoginButtonClicked() {
        this.props.history.push("/home");
    }

    render() {
        return (
            <button onClick={this.onLoginButtonClicked.bind(this)}>Login</button>
        );
    }
}
  