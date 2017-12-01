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
                <div className='navButton'>BROWSE</div>
                <div className='navButton'>CART</div>
                <div className='navButton'>MY SHELF</div>
                </div>
                <div className='leftSide'>
                    <button><Link className='white' to='/'>Logout</Link></button>
                </div>
                    
                </div>
              
            </div>
        )
    }
}