import axios from 'axios';
import { toast } from 'react-hot-toast';

// GET 
export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    const response = await axios.get('https://reqres.in/api/users');
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data.data });
    toast.success('Дані успішно завантажено!');
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    toast.error('Не вдалося завантажити дані.');
  }
};

// POST 
export const createData = (newData) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/users', newData);
    dispatch({ type: 'CREATE_DATA_SUCCESS', payload: response.data });
    toast.success('Новий запис успішно створено!');
  } catch (error) {
    console.error('Failed to create data:', error);
    toast.error('Не вдалося створити запис.');
  }
};

// PUT 
export const updateData = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
    dispatch({ type: 'UPDATE_DATA_SUCCESS', payload: response.data });
    toast.success('Запис успішно оновлено!');
  } catch (error) {
    console.error('Failed to update data:', error);
    toast.error('Не вдалося оновити запис.');
  }
};

// DELETE 
export const deleteData = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    dispatch({ type: 'DELETE_DATA_SUCCESS', payload: id });
    toast.success('Запис успішно видалено!');
  } catch (error) {
    console.error('Failed to delete data:', error);
    toast.error('Не вдалося видалити запис.');
  }
};
