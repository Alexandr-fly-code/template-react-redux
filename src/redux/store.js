import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux';
import reducer from './reducers';

const rootReducer = combineReducers({
    reducer,
    routing: routerReducer
})

const enhancer = composeWithDevTools();
const store = createStore(rootReducer, enhancer);

export default store;