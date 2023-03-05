import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

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
}

export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
  const carouselItem = await getProductByCategory(30)
  const featuredProducts = await getAllFeaturedProducts();
  
  const collectionItem = await getProductByParentCategory(31)
  return {
    props: {
      featuredProducts,
      collectionItem,
      carouselItem
    },
  };
};

const Home: NextPage<HomeStaticProps> = ({ featuredProducts, collectionItem, carouselItem }) => {
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
          headParagraphs={'LA FLORESTA VÀ HÀNH TRÌNH 30 NĂM BIẾN GIẤC MƠ HOA THÀNH HIỆN THỰC'}
          paragraphs={[
            'Hơn 30 năm nghiên cứu và phát triển trong ngành hoa lụa, chúng tôi là một trong những nhà cung cấp hoa lụa chất lượng và thẩm mỹ hàng đầu Việt Nam. Chúng tôi luôn nỗ lực mang đến Quý khách hàng những sản phẩm hoa lụa chất lượng, độc đáo, chuyên nghiệp nhất trên thị trường, mang lại màu sắc tươi mới tới cho môi trường làm việc của các công ty, tổ chức, gia đình… trên toàn quốc. Hiện nay, công ty chúng tôi đang cung cấp ra thị trường rất nhiều mẫu mã sản phẩm với các dòng hàng đa dạng với tiêu chí chất lượng, đi đôi với giá cả và dịch vụ tốt nhất, cam kết đem lại cho Quý khách hàng những trải nghiệm thú vị.',
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
