const initialState = {
    allBooks: [],
    
}

const GET_BOOKS = "GET_BOOKS"
export function getBooks(books){
    return{
        type: GET_BOOKS,
        payload: books
    }}

    export default function reducer(state=initialState,action){
        console.log(action)
    switch(action.type){
        case GET_BOOKS:
            return Object.assign( {}, state, {allBooks: action.payload})
    
            default:
            return state;
    }
}