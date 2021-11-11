import { createStore } from 'redux';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(reducers, composeWithDevTools());

export default store;
