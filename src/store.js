import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import representatives from './reducers/representatives'
import zipcodeForm from './reducers/zipcodeForm'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const combinedReducer = combineReducers({
  representatives, 
  zipcodeForm,
 
})

const store = createStore(combinedReducer, compose(applyMiddleware(thunk), composeWithDevTools()))


export default store