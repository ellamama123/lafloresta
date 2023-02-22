import Image from 'next/image';
import React, { useState } from 'react';

import { c } from '../../../shared/utils/classNameParser';
import styles from './ProductDetailsImage.module.scss';

export interface ProductDetailsImageItem {
  imgSrc: StaticImageData | string;
  alt: string;
  key: string;
}

interface ProductDetailsImageProps {
  classNames?: string[];
  images: ProductDetailsImageItem[];
}

const ProductDetailsImage: React.FC<ProductDetailsImageProps> = ({
  classNames = [],
  images,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className={c([styles['product-details-image'], ...classNames])}>
      <div className={c([styles['product-details-image-control']])}>
        {images.map(({ imgSrc, alt, key }) => (
          <button
            key={key}
            className={c([styles['product-details-image-control-item']])}
            onClick={() => setSelectedImage({ imgSrc, alt, key })}
          >
            <Image
              alt={alt}
              src={imgSrc}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </button>
        ))}
      </div>

      <div className={c([styles['product-details-image-display']])}>
        <Image
          alt={selectedImage?.alt}
          src={selectedImage?.imgSrc?? "https://dummyimage.com/600x400/000/fff"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default ProductDetailsImage;
