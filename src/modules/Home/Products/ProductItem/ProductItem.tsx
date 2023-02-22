import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { ProductDTO } from '../../../../api/types';
import Text from '../../../../shared/components/Text';
import { formatVnd } from '../../../../shared/utils/currency';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  key: number;
  product: ProductDTO;
}

const ProductItem: React.FC<ProductItemProps> = ({ key, product }) => {
  const router = useRouter();

  const navigateToProductDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <article key={key} className={styles['product-item']}>
      <Image
        onClick={navigateToProductDetails}
        className={styles['product-item-image']}
        src={product.images[0].src}
        width="300"
        height="300"
        alt="Product Item"
      />

      <div className={styles['product-item-details']}>
        <Text.H5>{product.name}</Text.H5>

        <Text.Body2>{formatVnd(+product.price)}</Text.Body2>
      </div>
    </article>
  );
};

export default ProductItem;
