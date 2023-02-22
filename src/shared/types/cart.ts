import { Size } from './size';

export interface CartItem {
  id: number;
  name: string;
  size: Size;
  quantity: number;
  price: number;
}

export interface CartState {
  cartItems: CartItem[];
}
