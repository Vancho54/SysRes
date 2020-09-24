import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware} from 'redux';
import { combineReducers } from "redux";
import { reducer as zoneReducer } from './ducks/zone.ducks';

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)
  
    const rootReducer = combineReducers({zoneReducer});

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
  }