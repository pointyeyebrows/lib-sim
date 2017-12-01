import React, {Component} from 'react';
import './Details.css';
import { connect } from 'react-redux';
import { getBooks, deleteBook } from './../../ducks/reducer';
import Nav from '../Nav/Nav';
import axios from 'axios';
import {Link} from 'react-router-dom';




class Details extends Component {
    componentDidMount() {
        if(!this.props.allBooks.length){
            axios.get('/getBooks').then(response =>{
                this.props.getBooks(response.data)
                console.log("resp" , response.data)
            })
        }
    }
    deleteBook(id){
        this.props.deleteBook(id);
    }
    
    
    render(){
        console.log('detials', this.props.allBooks)
        return(
        <div>
            <Nav/>
            <div className="detialsBackground">
            <div className="detailsMiddleBox">
            <div >
                    {this.props.allBooks.filter((item) => item.id === +this.props.match.params.id ).map( (item, i) => {
                        return( 
                            <div key = {i}>
                                <div className = 'individual'>
                                    
                                    <div>Name: {item.title}</div>
                                    <div>Details: {item.author}</div>
                                    <div> {item.description}</div>
                                    <button>EDIT</button>
                                    <div className = "button" onClick = { () => this.deleteBook(item.id)}><Link to='/browser'>delete</Link></div>
                                    <button>+ ADD TO CART</button>
                                    
                                   
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
        </div>
        </div>
        )
    }
}
function mapStateToProps(state){
    
    return {
        
        allBooks: state.allBooks
    }
}
export default connect(mapStateToProps, {getBooks, deleteBook})(Details)