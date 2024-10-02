import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Example</h1>
        <Counter />
        <TasksList />
      </div>
    </Provider>
  );
};

export default App;
