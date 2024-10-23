import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // rootReducer повинен поєднувати всі ред'юсери

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
