import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './Login';
import {Home} from './Home';
import {Details} from './Details';

class App extends Component {
  render() {
    console.log("render app")
    return (
      
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/home"} component={Home}></Route>
            <Route path={"/details"} component={Details}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );  
  }
}

export default App;
