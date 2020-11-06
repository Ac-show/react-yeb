import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true
}) || compose

const storeEnhancer = applyMiddleware(thunkMiddleware)

let store = createStore(reducer, composeEnhancers(storeEnhancer))

export default store