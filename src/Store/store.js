import { combineReducers, createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Modules/reducers';

export const store = createStore(combineReducers(reducers), composeWithDevTools());