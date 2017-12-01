import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <div className='navBar'>
                <div className="leftSide">
                <div className="navLogo">
                </div>
                <Link to= '/browser'>
                <div className='navButton'>BROWSE</div>
                </Link>
                <div className='navButton'>CART</div>
                <div className='navButton'>MY SHELF</div>
                </div>
                <div className='leftSide'>
                    <button> <a href='http://localhost:3030/auth/logout'>Sign out</a></button>
                </div>
                    
                </div>
              
            </div>
        )
    }
}