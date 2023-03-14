import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

import { c } from '../../../shared/utils/classNameParser';
import styles from './Products.module.scss';
import Text from '../../../shared/components/Text';
import Button from '../../../shared/components/Button';
import { ArrowLeft } from '../../../shared/assets/icons/ArrowLeft';
import { ArrowRight } from '../../../shared/assets/icons/ArrowRight';
import ProductItem from './ProductItem';
import { ProductDTO } from '../../../api/types';

interface ProductsProps {
  classNames: string[];
  products: ProductDTO[];
}

const Products: React.FC<ProductsProps> = ({ classNames, products }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const router = useRouter();

  const SLIDES_TO_SHOW = 4;
  const SLIDES_TO_SCROLL = 1;

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    cssEase: 'ease',
    slidesToShow: SLIDES_TO_SHOW,
    slidesToScroll: SLIDES_TO_SCROLL,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  const navigateToProductList = () => {
    router.push('/products');
  };

  return (
    <section className={c([styles['products'], ...classNames])}>
      <Text.H2>Sản phẩm</Text.H2>

      <div className={c([styles['products-cta']])}>
        <Button mode="cta" onClick={navigateToProductList}>
          <Text.Body1>Xem tất cả</Text.Body1>
        </Button>

        <div className={c([styles['products-cta-navigator']])}>
          <Button mode="text" onClick={prev} disabled={activeSlide === 0}>
            <ArrowLeft size="medium" />
          </Button>

          <Button
            mode="text"
            onClick={next}
            disabled={activeSlide === SLIDES_TO_SHOW}
          >
            <ArrowRight size="medium" />
          </Button>
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
};

export default Products;
