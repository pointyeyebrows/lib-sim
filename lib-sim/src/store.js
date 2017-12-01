import reducer from './ducks/reducer';
import promiseMiddleware from 'redux-promise-middleware'

import { createStore , applyMiddleware } from 'redux';


export default createStore(reducer, undefined, applyMiddleware(promiseMiddleware()));