import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
// import trainingData from './trainingDataReducer'

const rootReducer = combineReducers({
    user: userReducer
    // trainingData: trainingDataReducer
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)))