import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'
import Browser from './components/Browse/Browse'
import Details from './components/Details/Details'

class App extends Component {
  render() {
    return (
     <div>
        <Router>
          <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Browser} path ='/browser'/>
            <Route component={Details} path ='/detials/:id'/>
            </Switch>
        </Router>
       </div>
    );
  }
}

export default App;
