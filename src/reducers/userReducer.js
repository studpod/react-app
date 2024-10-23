const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS_REQUEST':
      case 'CREATE_USER_REQUEST':
      case 'UPDATE_USER_REQUEST':
      case 'DELETE_USER_REQUEST':
        return {
          ...state,
          loading: true,
          error: null,
        };
      case 'FETCH_USERS_SUCCESS':
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
      case 'CREATE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          users: [...state.users, action.payload],
        };
      case 'UPDATE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          users: state.users.map(user => 
            user.id === action.payload.id ? action.payload : user
          ),
        };
      case 'DELETE_USER_SUCCESS':
        return {
          ...state,
          loading: false,
          users: state.users.filter(user => user.id !== action.payload),
        };
      case 'FETCH_USERS_FAILURE':
      case 'CREATE_USER_FAILURE':
      case 'UPDATE_USER_FAILURE':
      case 'DELETE_USER_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  