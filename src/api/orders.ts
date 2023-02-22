import { Order } from './types';
import { postWooCommerceData } from './wooCommerce';

export const createOrder = async (order: Order) => {
  const result = await postWooCommerceData('/orders', order);
  return result;
};
