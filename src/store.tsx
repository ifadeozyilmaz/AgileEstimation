/* global process */
import {createStore, combineReducers, applyMiddleware, compose, Store} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

// then we load all reducer, that we need
import {
    userReducer, UserReducerState,

} from './reducer';

// and other needed middleware stuff, so we can actually compose it all
const epicMiddleware = createEpicMiddleware();

// now we generate the middleware
const middleware = compose(
    applyMiddleware(
        epicMiddleware,
    ),
    // eslint-disable-next-line
    // @ts-ignore
    // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f
);

// then we create the main reducer, by combining all other reducers
const mainReducer = combineReducers({
    user: userReducer
});

// the complete application state
export interface State {
    user: UserReducerState;

}

// and finally generate the store, with all reducers and middleware, but patch in the router as well
export const store: Store<State> = createStore(
    mainReducer,
    middleware
);
