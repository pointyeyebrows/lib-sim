import React, { Component } from 'react';
import './Browse.css'
import Nav from '../Nav/Nav.js';
import { connect } from 'react-redux';
import { getBooks} from '../../ducks/reducer'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <div><Nav/>
        <div className = "browseAll">
        <div className = "browseMiddleBox">
            
            {this.props.allBooks.map((item, i) => {
                
                return(
                    <div key={i} >
                    <div className='allBookBoxes'>
                    <div className='bookBox'>
                        <div>{item.title}</div>
                        <div>{item.author}</div>
                        <Link to = {`/detials/${item.id}`}>
                        <button>DETIALS</button>
                            </Link>
                       
                        </div>
                    </div>
                    </div>
                )
            })}
            
        </div>
        </div> 
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
