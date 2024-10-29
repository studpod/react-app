import React from 'react';
// import DataList from './components/DataList';
// import AddDataForm from './components/AddDataForm';
import { Toaster } from 'react-hot-toast';
import LocationList from './components/LocationList';


const App = () => {
  return (
    <div>
      <h1>Список користувачів</h1>
      {/* <AddDataForm />
      <DataList />
      <Toaster position="top-right" />  */}
      <div>
      <h1>Додаток Apollo Client</h1>
      <LocationList />
      <Toaster position="top-right" /> 
    </div>
    </div>

    
  );
};

export default App;
