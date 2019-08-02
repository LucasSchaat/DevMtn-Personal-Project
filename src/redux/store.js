import { createStore, combineReducers, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from './userReducer'
import trainingReducer from './trainingReducer'
import testingReducer from './testingReducer'

const rootReducer = combineReducers({
    user: userReducer,
    training: trainingReducer,
    testing: testingReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(promiseMiddleware)))
    
export const persistor = persistStore(store)