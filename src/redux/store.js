import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import trainingReducer from './trainingReducer'
import testingReducer from './testingReducer';

const rootReducer = combineReducers({
    user: userReducer,
    training: trainingReducer,
    testing: testingReducer,
})

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)))