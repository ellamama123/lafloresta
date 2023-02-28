import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { ProductDTO } from '../../../api/types';
import assets from '../../../shared/assets';
import Text from '../../../shared/components/Text';
import { formatVnd } from '../../../shared/utils/currency';
import { extractTextFromHTML } from '../../../shared/utils/string';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: ProductDTO;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const router = useRouter();

  console.log('121212', product);
  

  const navigateToProductDetails = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <article
      onClick={navigateToProductDetails}
      className={styles['product-item']}
    >
      <Image
        className={styles['product-item-image']}
        src={product.images[0].src}
        alt="Product Item"
        width={'100%'}
        height={'100%'}
      />

      <div className={styles['product-item-details']}>
        <Text.H4>{product.name}</Text.H4>
        <Text.Body2 classNames={[styles['product-item-details-description']]}>
          {extractTextFromHTML(product.short_description)}
        </Text.Body2>

        <Text.Body2>{formatVnd(+product.price)}</Text.Body2>
      </div>
    </article>
  );
};

export default ProductItem;
