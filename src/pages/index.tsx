import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { getSiteInfo } from '../api/posts';

import { getAllFeaturedProducts, getProductByParentCategory, getProductByCategory } from '../api/products';
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
  collectionItem: any;
  carouselItem: any;
  blogItems: any;
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const carouselItem = await getProductByCategory(30)
  const featuredProducts = await getAllFeaturedProducts();

  const blogItems = await getSiteInfo()    
  console.log('4444', blogItems);

  const collectionItem = await getProductByParentCategory(31)
  return {
    props: {
      featuredProducts,
      collectionItem,
      carouselItem,
      blogItems
    },
  };
};

const Home: NextPage<HomeStaticProps> = ({ featuredProducts, collectionItem, carouselItem, blogItems }) => {
  const TOP_FEATURED_PRODUCTS_COUNT = 4;
  const topFeaturedProducts = featuredProducts.filter(
    (_, i) => i < TOP_FEATURED_PRODUCTS_COUNT
  );

  const carouselItems: CarouselItemType[] = carouselItem.map((data: { id: any; name: any; images:[{ src: any; }]; }) => ({
    displayText: data?.name,
    imageSrc: data?.images[0]?.src,
    id: data?.id
  }))

  const collectionItems: CollectionBannerItemType[] = collectionItem.map((data: { id: any; name: any; image: { src: any; }; }) => ({
    id: data.id,
    title: data.name, 
    ctaText: 'Xem chi tiết',
    imageSrc: data.image.src
  }))

  
  
  // const blogItem: any = blogItems.map((data: any) => ({
  //   title: data.title.rendered,
  // }))
  // console.log('44442', blogItem);
  
  

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
