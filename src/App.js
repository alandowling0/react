import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Login} from './Login';
import {Home} from './Home';
import {Details} from './Details';
import {NotFound} from './NotFound';

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
            <Home 
                {...props} 
                height={height} 
                width={width}>
            </Home>
        );
    }
    const renderDetails = (props) => {
        return (
            <Details 
                {...props} 
                height={height}
                width={width}
                name="Alan"
                points={1234}
                image="face.jpg"
                >
            </Details>
        );
    }

    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path={"/"} component={Login}></Route>
                    <Route path={"/login"} component={Login}></Route>
                    <Route path={"/home"} render={renderHome}></Route>
                    <Route path={"/details"} render={renderDetails}></Route>
                    <Route path={"/*"} component={NotFound}></Route>
                </Switch>
            </div>
      </BrowserRouter>
    );  
  }
}

export default App;
