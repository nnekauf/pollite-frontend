import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import representatives from './reducers/representatives'
import zipcodeForm from './reducers/zipcodeForm'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
  representatives, 
  zipcodeForm,
 
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)))


export default store