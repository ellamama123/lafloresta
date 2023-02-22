import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import { ArrowLeft } from '../../../shared/assets/icons/ArrowLeft';
import { ArrowRight } from '../../../shared/assets/icons/ArrowRight';
import { c } from '../../../shared/utils/classNameParser';
import styles from './Carousel.module.scss';

interface CarouselProps {
  classNames?: string[];
  carouselItems: CarouselItemProps[];
}

const Carousel: React.FC<CarouselProps> = ({
  classNames = [],
  carouselItems,
}) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    arrows: false,
    className: styles['carousel-slider'],
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: 'ease',
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_: number, next: number) => setActiveSlide(next),
    appendDots: (dots: React.ReactNode[]) => (
      <div
        //   Inline styling because this div can't have className injected
        style={{
          position: 'absolute',
          bottom: '0.5rem',
        }}
      >
        <ul className={styles['carousel-dot-wrapper']}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div key={i} className={styles['carousel-dot']}>
        <div
          className={c([
            styles['carousel-dot-content'],
            activeSlide === i ? styles['carousel-dot-content-selected'] : '',
          ])}
        ></div>
      </div>
    ),
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className={c([styles['carousel'], ...classNames])}>
      <Slider {...settings} ref={sliderRef}>
        {carouselItems.map((props, i) => (
          <div key={i}>
            <CarouselItem {...props} />
          </div>
        ))}
      </Slider>

      <CarouselArrow
        type="left"
        onClick={prev}
        classNames={[styles['carousel-arrow'], styles['carousel-arrow-left']]}
      />
      <CarouselArrow
        type="right"
        onClick={next}
        classNames={[styles['carousel-arrow'], styles['carousel-arrow-right']]}
      />
    </section>
  );
};

export interface CarouselItemProps {
  displayText: string;
  imageSrc: StaticImageData;
}
const CarouselItem: React.FC<CarouselItemProps> = ({
  imageSrc,
  displayText,
}) => {
  return (
    <div className={styles['carousel-item']}>
      <Image layout="fill" objectFit="cover" src={imageSrc} alt={displayText} />
    </div>
  );
};

interface CarouselArrowProps {
  type: 'left' | 'right';
  classNames?: string[];
  onClick: () => void;
}
const CarouselArrow: React.FC<CarouselArrowProps> = ({
  type,
  classNames = [],
  onClick,
}) => {
  return (
    <button
      aria-label={`arrow ${type}`}
      className={c([...classNames])}
      onClick={onClick}
    >
      {type === 'left' ? (
        <ArrowLeft mode="secondary" />
      ) : (
        <ArrowRight mode="secondary" />
      )}
    </button>
  );
};

export default Carousel;
