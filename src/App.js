import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Details from './Details';
import {NotFound} from './NotFound';
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {width: 0, height: 0};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
}
  
componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
}   

render() {
    let height = this.state.height;
    let width = this.state.width;

    if(height < width / 2) {
        height = width / 2;
    }
    if(width < height / 2) {
        width = height / 2;
    }

    const renderHome = (props) => {
        return ( 
            this.props.loggedIn ? (
                <Home 
                    {...props} 
                    height={height} 
                    width={width}>
                </Home>
            ) : (
                <Login/>
            )
        );
    }
    const renderDetails = (props) => {
        return (this.props.loggedIn &&
            <Details 
                {...props} 
                height={height}
                width={width}
                users={this.props.users}
                >
            </Details>
        );
    }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} render={renderHome}></Route>
                <Route path={"/home"} render={renderHome}></Route>
                <Route path={"/details/:user"} render={renderDetails}></Route>
                <Route path={"/*"} component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    );  
  }
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loginCredentials.username.length > 0,
        users: state.searchResult.users
    }
}

export default connect(mapStateToProps, null)(App);
