import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import  thunk  from "redux-thunk"
import { rootReducer } from "../reducers/rootReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = { // configuration object for redux-persist
    key: 'root',
    storage: storage, // define which storage to use
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer, use it in the store instead of the root reducer


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

const  persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export {store, persistor}