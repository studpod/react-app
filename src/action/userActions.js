import axios from 'axios';

// Дія для отримання списку користувачів
export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USERS_REQUEST' });

  try {
    const response = await axios.get('https://reqres.in/api/users');
    dispatch({ type: 'FETCH_USERS_SUCCESS', payload: response.data.data });
  } catch (error) {
    dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
  }
};

// Дія для створення нового користувача
export const createUser = (userData) => async (dispatch) => {
  dispatch({ type: 'CREATE_USER_REQUEST' });

  try {
    const response = await axios.post('https://reqres.in/api/users', userData);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
  }
};

// Дія для оновлення користувача
export const updateUser = (userId, updatedData) => async (dispatch) => {
  dispatch({ type: 'UPDATE_USER_REQUEST' });

  try {
    const response = await axios.put(`https://reqres.in/api/users/${userId}`, updatedData);
    dispatch({ type: 'UPDATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_FAILURE', payload: error.message });
  }
};

// Дія для видалення користувача
export const deleteUser = (userId) => async (dispatch) => {
  dispatch({ type: 'DELETE_USER_REQUEST' });

  try {
    await axios.delete(`https://reqres.in/api/users/${userId}`);
    dispatch({ type: 'DELETE_USER_SUCCESS', payload: userId });
  } catch (error) {
    dispatch({ type: 'DELETE_USER_FAILURE', payload: error.message });
  }
};
