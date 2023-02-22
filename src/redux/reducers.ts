import { combineReducers } from '@reduxjs/toolkit';

import cartReducer from './cart';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
