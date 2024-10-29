import React from 'react';
import DataList from './components/DataList';
import AddDataForm from './components/AddDataForm';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div>
      <h1>Список користувачів</h1>
      <AddDataForm />
      <DataList />
      <Toaster position="top-right" /> 
    </div>
  );
};

export default App;
