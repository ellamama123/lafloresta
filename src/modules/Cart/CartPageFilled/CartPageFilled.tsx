import React from 'react';

import CartPageForm from '../CartPageForm';
import Preview from '../Preview';
import styles from './CartPageFilled.module.scss';

interface CartPageFilledProps {}

const CartPageFilled: React.FC<CartPageFilledProps> = ({}) => {
  return (
    <section className={styles['cart']}>
      <CartPageForm classNames={[styles['cart-form']]} />
      <Preview classNames={[styles['cart-preview']]} />
    </section>
  );
};

export default CartPageFilled;
