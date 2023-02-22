import { NextPage } from 'next';
import Head from 'next/head';

import CartPageEmpty from '../modules/Cart/CartPageEmpty';
import CartPageFilled from '../modules/Cart/CartPageFilled';
import { cartItemQuantitySelector } from '../redux/cart/selectors';
import { useAppSelector } from '../redux/hooks';

const Cart: NextPage = () => {
  const cartItemQuantity = useAppSelector(cartItemQuantitySelector);
  return (
    <>
      <Head>
        <title>La Floresta Cart</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {cartItemQuantity > 0 ? <CartPageFilled /> : <CartPageEmpty />}
    </>
  );
};

export default Cart;
