import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { stateSelector } from '../store';

export const cartRootSelector = createDraftSafeSelector(
  stateSelector,
  (state) => state.cart
);

export const cartItemsSelector = createDraftSafeSelector(
  cartRootSelector,
  (state) => state.cartItems
);

export const cartItemQuantitySelector = createDraftSafeSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((reducer, item) => {
      reducer += item.quantity;
      return reducer;
    }, 0)
);

export const cartTotalPriceSelector = createDraftSafeSelector(
  cartItemsSelector,
  (cartItems) =>
    cartItems.reduce((reducer, item) => {
      reducer += item.quantity * item.price;
      return reducer;
    }, 0)
);
