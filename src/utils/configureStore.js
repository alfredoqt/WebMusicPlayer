/**
 * @author: Alfredo Quintero Tlacuilo
 * @description: A util to configure a store, taken from a current project by Alfredo Quintero Tlacuilo and Aecio Alves Levy
 */

import { createStore, applyMiddleware, compose } from 'redux';

import appReducer from '../reducers';

// Simplified version of redux-thunk
const thunk = store => next => action =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) : // Let it dispatch as many as it wants
        next(action);

const configureStore = () => {
    const middlewares = [];
    
    // Call them as the actions propagate through them
    middlewares.push(thunk);

    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        appReducer,
        process.env.NODE_ENV === 'production' ? applyMiddleware(...middlewares) : composeEnhancers(applyMiddleware(...middlewares)),
    );

    return store;
};

export default configureStore;
