import axios from 'axios';
const initialState = {
    allBooks: [],
    
}

const GET_BOOKS = "GET_BOOKS";
const DELETE_BOOK = "DELETE_BOOK"

export function getBooks(books){
    return{
        type: GET_BOOKS,
        payload: books
    }}
    export function deleteBook(id){
        console.log('reducer' , id)
        const erase = axios.delete(`/books/delete/${id}`).then( erase => erase.data)
        return{
            type: DELETE_BOOK,
            payload: erase
        }
        
    }
    

    export default function reducer(state=initialState,action){
        console.log(action)
    switch(action.type){
        case GET_BOOKS:
            return Object.assign( {}, state, {allBooks: action.payload})
        case DELETE_BOOK + "_FULFILLED":
            return Object.assign( {}, state, {allBooks: action.payload})
    
            default:
            return state;
    }
}