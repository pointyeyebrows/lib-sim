import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
     <div>
        <Router>
          <Switch>
            <Route component={Login} exact path='/' />
            </Switch>
        </Router>
       </div>
    );
  }
}

export default App;
