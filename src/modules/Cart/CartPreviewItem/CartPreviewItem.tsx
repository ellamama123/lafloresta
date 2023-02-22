import React from 'react';
import Image from 'next/image';

import Text from '../../../shared/components/Text';
import { CartItem } from '../../../shared/types/cart';
import { formatVnd } from '../../../shared/utils/currency';
import styles from './CartPreviewItem.module.scss';
import assets from '../../../shared/assets';

interface CartPreviewItemProps {
  item: CartItem;
}

const CartPreviewItem: React.FC<CartPreviewItemProps> = ({ item }) => {
  return (
    <div className={styles['cart-preview-item']}>
      <div className={styles['cart-preview-item-summary']}>
        <div className={styles['cart-preview-item-summary-image']}>
          <Image
            layout="fill"
            objectFit="cover"
            src={assets.OrangeFlower3}
            alt="Product Item"
          />
        </div>

        <div>
          <Text.H5>{item.name}</Text.H5>
          <Text.Body2>Size: {item.size}</Text.Body2>
          <Text.Body2>SL: {item.quantity}</Text.Body2>
        </div>
      </div>

      <Text.H5>{formatVnd(item.price * item.quantity)}</Text.H5>
    </div>
  );
};

export default CartPreviewItem;
