import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createData } from '../actions/dataActions';

const AddDataForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ first_name: '', last_name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createData(formData));
    setFormData({ first_name: '', last_name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        placeholder="Ім'я"
        value={formData.first_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="last_name"
        placeholder="Прізвище"
        value={formData.last_name}
        onChange={handleChange}
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddDataForm;
