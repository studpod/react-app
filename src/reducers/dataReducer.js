const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_DATA_SUCCESS':
        return { ...state, loading: false, items: action.payload };
      case 'FETCH_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'CREATE_DATA_SUCCESS':
        return { ...state, items: [...state.items, action.payload] };
      case 'UPDATE_DATA_SUCCESS':
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      case 'DELETE_DATA_SUCCESS':
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  