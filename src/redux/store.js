import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterReducer';
import tasksReducer from './reducers/tasksReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tasksList: tasksReducer,
  },
});

export default store;
