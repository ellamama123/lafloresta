import { createAction } from '@reduxjs/toolkit';

import { CartItem } from '../../shared/types/cart';

export const addItem = createAction<CartItem>('cart/addItem');
export const resetCart = createAction('cart/resetCart');
