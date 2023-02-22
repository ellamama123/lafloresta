import { createReducer } from '@reduxjs/toolkit';

import { initialState } from './state';
import * as actions from './actions';

export const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(actions.addItem, (state, { payload }) => {
    const existingItem = state.cartItems.find(
      (item) => item.id === payload.id && item.size === payload.size
    );

    if (!!existingItem) {
      existingItem.quantity += payload.quantity;
    } else {
      state.cartItems.push(payload);
    }
  });

  builder.addCase(actions.resetCart, (state) => {
    state.cartItems = [];
  });
});
