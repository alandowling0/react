import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameText: "",
            passwordText: ""
        };
    }

    componentDidMount() {
        this.props.logout()
    }

    onLoginButtonClicked() {
        let githubUserQuery = "https://api.github.com/search/users";
        githubUserQuery += ("?q=" + this.state.usernameText);
        
        axios.get(githubUserQuery, {auth: {username: this.state.usernameText, password: this.state.passwordText}})
            .then(() => {
                this.props.login(this.state.usernameText, this.state.passwordText);
            })
            .catch(() => {
                this.setState({
                        usernameText: "",
                        passwordText: ""
                    }
                )
            });  
    }

    usernameTextChanged(event) {
        this.setState({
            usernameText: event.target.value
        });
    }

    passwordTextChanged(event) {
        this.setState({
            passwordText: event.target.value
        });
    }

    handleKeyPress(event) {
        if(event.key==="Enter") {
            this.onLoginButtonClicked();
        }
    }

    render() {
        return (
            <div onKeyDown={this.handleKeyPress.bind(this)}>
                <input type="text" placeholder="Github username" value={this.state.usernameText} onChange={this.usernameTextChanged.bind(this)} />
                <input type="password" placeholder="password" value={this.state.passwordText} onChange={this.passwordTextChanged.bind(this)}/>
                <button onClick={this.onLoginButtonClicked.bind(this)}>Login</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => {
            dispatch(
                {
                    type: "LOGIN",
                    payload: {
                        username: username,
                        password: password
                    }
                }
            )
        },
        logout: () => {
            dispatch(
                {
                    type: "LOGOUT",
                    payload: {}
                }
            )
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);
  