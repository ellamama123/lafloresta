import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { getAllFeaturedProducts } from '../api/products';
import { ProductDTO } from '../api/types';
import Blogs from '../modules/Home/Blogs';
import Carousel, { CarouselItemType } from '../modules/Home/Carousel';
import CollectionBanner, {
  CollectionBannerItemType,
} from '../modules/Home/CollectionBanner';
import styles from '../modules/Home/Home.module.scss';
import MainProducts from '../modules/Home/MainProducts';
import Products from '../modules/Home/Products';
import assets from '../shared/assets';
import InfoSection from '../shared/components/InfoSection';
import { ENABLE_BLOGS } from '../shared/flags/features';

interface HomeStaticProps {
  featuredProducts: ProductDTO[];
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const featuredProducts = await getAllFeaturedProducts();

  return {
    props: {
      featuredProducts,
    },
  };
};

const Home: NextPage<HomeStaticProps> = ({ featuredProducts }) => {
  const TOP_FEATURED_PRODUCTS_COUNT = 4;
  const topFeaturedProducts = featuredProducts.filter(
    (_, i) => i < TOP_FEATURED_PRODUCTS_COUNT
  );

  const carouselItems: CarouselItemType[] = [
    {
      displayText: 'Dan Dan Collection',
      imageSrc: assets.Book1,
    },
    {
      displayText: 'ClownZ Collection',
      imageSrc: assets.Book2,
    },
    {
      displayText: 'Chipu Collection',
      imageSrc: assets.Book3,
    },
  ];

  const collectionItems: CollectionBannerItemType[] = [
    {
      title: 'Hoa 1',
      ctaText: 'Xem sản phẩm',
      imageSrc: assets.MultiFlower1,
    },
    {
      title: 'Hoa 2',
      ctaText: 'Xem sản phẩm',
      imageSrc: assets.MultiFlower2,
    },
    {
      title: 'Hoa 3',
      ctaText: 'Xem sản phẩm',
      imageSrc: assets.OrangeFlower1,
    },
  ];

  return (
    <>
      <Head>
        <title>La Floresta</title>
        <meta name="description" content="Refined Photography Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['home']}>
        <Carousel carouselItems={carouselItems} />

        <MainProducts
          classNames={[styles['home-main-products']]}
          products={topFeaturedProducts}
        />

        <Products
          classNames={[styles['home-products']]}
          products={featuredProducts}
        />

        <div className={styles['home-collection-banner-wrapper']}>
          {collectionItems.map((item) => (
            <CollectionBanner {...item} key={item.title} />
          ))}
        </div>

        <InfoSection
          title="Về chúng tôi"
          imageSrc={assets.Showroom}
          paragraphs={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo.',
          ]}
          ctaDisplay="Tìm hiểu thêm"
          classNames={[styles['home-info-section']]}
          reverse
        />

        {ENABLE_BLOGS && <Blogs classNames={[styles['home-blogs']]} />}
      </div>
    </>
  );
};

export default Home;
