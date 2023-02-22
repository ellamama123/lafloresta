import { useRouter } from 'next/router';
import React from 'react';

import Button from '../../../shared/components/Button';
import Text from '../../../shared/components/Text';
import styles from './CartPageEmpty.module.scss';

interface CartPageEmptyProps {}

const CartPageEmpty: React.FC<CartPageEmptyProps> = () => {
  const router = useRouter();
  const navigateToProducts = () => router.push('/products');

  return (
    <section className={styles['cart-page-empty']}>
      <Text.H2 classNames={[styles['cart-page-empty-header']]}>
        Bạn không có gì trong giỏ hàng :(
      </Text.H2>
      <Button onClick={navigateToProducts}>Quay trở lại shopping</Button>
    </section>
  );
};

export default CartPageEmpty;
