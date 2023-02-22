import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import ProductItem from '../../modules/Products/ProductItem';
import PageHeader from '../../shared/components/PageHeader';
import styles from '../../modules/Products/Products.module.scss';
import { getAllProducts } from '../../api/products';
import { ProductDTO } from '../../api/types';

interface ProductsStaticProps {
  products: ProductDTO[];
}

export const getStaticProps: GetStaticProps<ProductsStaticProps> = async () => {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
};

const Products: NextPage<ProductsStaticProps> = ({ products }) => {
  return (
    <>
      <Head>
        <title>La Floresta</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <PageHeader title="Tất Cả Sản Phẩm" />

        <div className={styles['products']}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
