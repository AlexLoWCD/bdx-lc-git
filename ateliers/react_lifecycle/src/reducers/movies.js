const initialState = {
  loading: false,
  list: [],
  error: '',
};

const movies = (state = initialState, action) => {
  switch(action.type) {
    case 'START_FETCH_MOVIES': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'FETCH_SUCCESS_MOVIES': {
      return {
        loading: false,
        list: [...action.movies],
        error: '',
      }
    }
    case 'FETCH_ERROR_MOVIES': {
      return {
        ...state,
        loading: false,
        error: action.err,
      }
    }
    default:
      return state;
  }
}

export default movies;