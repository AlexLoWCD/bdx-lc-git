import { combineReducers } from 'redux';

import MoviesReducer from './movies';

const allReducers = combineReducers({
  movies: MoviesReducer,
});

export default allReducers;
