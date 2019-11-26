import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import {connect} from 'react-redux';
import { rootReducer, rootSaga, rootActions as Actions } from "./rootDuck";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
export const Persistor = persistStore(Store);

sagaMiddleware.run(rootSaga);

export {Actions, connect};
export default Store;
