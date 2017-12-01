import React, { Component } from 'react';
import './Browse.css'
import Nav from '../Nav/Nav.js';
import { connect } from 'react-redux';
import { getBooks} from '../../ducks/reducer'
import axios from 'axios';

class Browser extends Component{
    componentDidMount(){
        if(!this.props.allBooks.length){
            axios.get('/getBooks').then(response =>{
                this.props.getBooks(response.data)
                console.log("resp" , response.data)
            })
        }
    }
    render(){
        console.log("all" , this.props.allBooks)
        return(
        <div className = "productsAll">
        <div className = "overflowHide">
            <Nav/>
            </div>
            <div className = "paddingNav"></div>
            {this.props.allBooks.map((item, i) => {
                
                return(
                    <div key={i} >
                        <div>{item.title}</div>
                    </div>
                )
            })}
        </div>
        )
        }
    
}
function mapStateToProps(state){
    console.log('state in mSTP', state);
    return {
        allBooks: state.allBooks
    }
}


export default connect(mapStateToProps, {getBooks})(Browser)
