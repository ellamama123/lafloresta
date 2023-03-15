import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import { PostDTO } from '../../../api/types';
import { ArrowLeft } from '../../../shared/assets/icons/ArrowLeft';
import { ArrowRight } from '../../../shared/assets/icons/ArrowRight';
import Button from '../../../shared/components/Button';
import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import BlogItem from './BlogItem/BlogItem';
import styles from './Blogs.module.scss';

interface BlogsProps {
  classNames: string[];
  blogs: PostDTO[];
}

const Blogs: React.FC<BlogsProps> = ({ classNames, blogs }) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(0);

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
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const prev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className={c([styles['blogs'], ...classNames])}>
      <Text.H2>Blogs</Text.H2>

      <div className={c([styles['blogs-cta']])}>
        <Button mode="cta">
          <Text.Body1>Xem tất cả</Text.Body1>
        </Button>

        <div className={c([styles['blogs-cta-navigator']])}>
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
        {blogs.map((item, index) => (
          <BlogItem key={index} item={item} />
        ))}
      </Slider>
    </section>
  );
};

export default Blogs;
