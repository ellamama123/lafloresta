import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import assets from '../../../shared/assets';
import Text from '../../../shared/components/Text';
import styles from './ShowcaseCarousel.module.scss';

interface ShowcaseCarouselProps {}

const ShowcaseCarousel: React.FC<ShowcaseCarouselProps> = ({}) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'ease',
  };
  return (
    <div className={styles['showcase-carousel']}>
      <div className={styles['showcase-carousel-text']}>
        <Text.H2 classNames={[styles['showcase-carousel-text-title']]}>
          Đối tác
        </Text.H2>
        <Text.Body2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna
        </Text.Body2>
      </div>

      <Slider {...settings}>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
        <div className={styles['showcase-carousel-logo-item']}>
          <Image src={assets.GucciLogo} alt="Facebook" />
        </div>
      </Slider>
    </div>
  );
};

export default ShowcaseCarousel;
