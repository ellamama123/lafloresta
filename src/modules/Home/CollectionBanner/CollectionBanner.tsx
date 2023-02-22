import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '../../../shared/components/Button';
import Text from '../../../shared/components/Text';
import { c } from '../../../shared/utils/classNameParser';
import styles from './CollectionBanner.module.scss';

export type CollectionBannerItemType = {
  title: string;
  ctaText: string;
  imageSrc: StaticImageData;
};

type CollectionBannerProps = {
  classNames?: string[];
} & CollectionBannerItemType;

const CollectionBanner: React.FC<CollectionBannerProps> = ({
  classNames = [],
  title,
  ctaText,
  imageSrc,
}) => {
  const router = useRouter();
  const navigateToProducts = () => router.push('/products');

  return (
    <section className={c([styles['collection-banner'], ...classNames])}>
      <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />

      <div className={styles['collection-banner-details']}>
        <Text.H2 classNames={[styles['collection-banner-details-text']]}>
          {title}
        </Text.H2>

        <Button
          mode="outlined"
          classNames={[styles['collection-banner-details-button']]}
          onClick={navigateToProducts}
        >
          <Text.Body1 classNames={[styles['collection-banner-details-text']]}>
            {ctaText}
          </Text.Body1>
        </Button>
      </div>
    </section>
  );
};

export default CollectionBanner;
