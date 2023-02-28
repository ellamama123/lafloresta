import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, NextPage, GetStaticPropsContext } from 'next';
import Head from 'next/head';

import { getCategoryIdInfo, getProductByCategory } from '../../api/products';
import PageHeader from '../../shared/components/PageHeader';
import styles from '../../modules/Products/Products.module.scss';
import ProductItem from '../../modules/Products/ProductItem';

interface ProductDetailsContext extends ParsedUrlQuery {
  productId: string;
  id: string;
}

export async function getStaticProps(
  context: GetStaticPropsContext<ProductDetailsContext>
) {
  if (!context.params?.id) throw new Error('No PID');

  const { id } = context.params;

  if (isNaN(+id)) throw new Error('Invalid PID');

  const categoryDetailsPromise = getCategoryIdInfo(+id);
  const productDetailsPromise = getProductByCategory(+id);

  const [categoryInfo, productDetail] = await Promise.all([
    categoryDetailsPromise,
    productDetailsPromise
    // returnsInfoPromise,
  ]);

  return {
    props: {
      categoryInfo,
      productDetail
    },
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  };
};

interface CategoryInfo {
  categoryInfo: any;
  productDetail: any;
}


const Collections: NextPage<CategoryInfo> = ({
  categoryInfo,
  productDetail
}) => {  

  return (
    <>
      <Head>
        <title>La Floresta</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <PageHeader title={categoryInfo?.name} />
      </section>
      <div className={styles['products']}>
          {productDetail.map((product : any) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
    </>
  );
};

export default Collections;
