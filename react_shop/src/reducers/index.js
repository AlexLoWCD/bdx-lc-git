import { combineReducers } from 'redux';

import cartReducer from './cart';
import itemsReducer from './items';

const allReducers = combineReducers({
  items: itemsReducer,
  cart: cartReducer,
});

export default allReducers;
