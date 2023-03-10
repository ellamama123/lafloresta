import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import { ProductDTO } from '../../../api/types';
import Button from '../../../shared/components/Button';
import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import styles from './MainProducts.module.scss';

interface MainProductsProps {
  classNames: string[];
  products: ProductDTO[];
}

const MainProducts: React.FC<MainProductsProps> = ({
  classNames = [],
  products,
}) => {
  const router = useRouter()
  const GRID_COUNT = 2;
  const featuredProducts = products.reduce((aggregate, product, i) => {
    if (i % GRID_COUNT === 0) aggregate.push([]);

    aggregate[aggregate.length - 1].push(product);

    return aggregate;
  }, [] as ProductDTO[][]);

  const navigateToProducts = (id: any) => {
    router.push(`/products/${id}`);
  }

  return (
    <section className={c([styles['main-products'], ...classNames])}>
      <Text.H2>Sản phẩm chính</Text.H2>

      <ul className={styles['main-products-grid']}>
        {featuredProducts.map((col, i) => (
          <React.Fragment key={JSON.stringify(col)}>
            <div className={styles['main-products-grid-col']}>
              {col.map((product, j) => (
                <li
                  key={product.id}
                  className={c([
                    styles['main-products-grid-item'],
                    styles[
                      `main-products-grid-item-${
                        (i + j) % 2 === 0 ? 'short' : 'long'
                      }`
                    ],
                  ])}
                >
                  <div>
                    <Image
                      src={product.images[0].src}
                      alt={'Product 1'}
                      layout="fill"
                      objectFit="cover"
                    />
                    <div className={styles['main-products-grid-title-wrap']}>
                      <p className={styles['main-products-grid-title']}>{product.name}</p>
                      <p className={styles['main-products-grid-short-description']} dangerouslySetInnerHTML={{__html: product.short_description}} />
                      <Button
                        mode="outlined"
                        classNames={[
                          styles['main-products-grid-button'],
                        ]}
                        onClick={() => navigateToProducts(product?.id)}
                      >
                        <Text.Body1
                          classNames={[
                            styles['main-products-grid-text'],
                          ]}
                        >
                          Xem chi tiết
                        </Text.Body1>
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </div>

            {i < featuredProducts.length - 1 && (
              <div
                style={{
                  width: '1rem',
                }}
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};

export default MainProducts;
