import React, { Component } from 'react';
import './Login.css';
import {Link} from 'react-router-dom'




export default class Login extends Component {
    
    render() {
        return (
          <div className = "backgoundColor">
            <div className = "innerBox">
            <div className = 'logo'>
            </div>
            <div className = "loginBox">
            <div className = "username"> Username
            <input className = "inputBox"/>
            </div>
            <div className = "password"> Password
            <input className = "inputBox"/>
            </div>
            <div className = "buttons">
            <a href={process.env.REACT_APP_LOGIN}>      
            <button className = "button">Register</button>
            <button className = "button">Login</button>
            </a>
            </div>
            </div>
            </div>
              </div>
        )
    }
}