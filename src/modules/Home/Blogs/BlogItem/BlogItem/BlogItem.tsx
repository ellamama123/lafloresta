import React from 'react';
import Image from 'next/image';

import styles from './BlogItem.module.scss';
import assets from '../../../../../shared/assets';
import Text from '../../../../../shared/components/Text';
import Button from '../../../../../shared/components/Button';
import { ArrowRight } from '../../../../../shared/assets/icons/ArrowRight';

interface BlogItemProps {}

const BlogItem: React.FC<BlogItemProps> = ({}) => {
  return (
    <div className={styles['blog-item']}>
      <Image src={assets.OrangeFlower1} alt="Product Item" />

      <div className={styles['blog-item-details']}>
        <Text.H4>Cách Bảo Quản Hoa Lụa Đúng Cách</Text.H4>

        <Text.Body2 classNames={[styles['blog-item-details-description']]}>
          Lorem ipsum dolor sit amet, consectetu adipiscing elit ut aliquam,
          purus sit amet luctus venenatis ...
        </Text.Body2>

        <div className={styles['blog-item-details-cta']}>
          <Text.Body2 classNames={[styles['blog-item-details-cta-text']]}>
            01/01/2022
          </Text.Body2>

          <Button mode="text">
            <Text.Body2
              classNames={[styles['blog-item-details-cta-button-text']]}
            >
              Đọc tiếp
            </Text.Body2>
            <ArrowRight size="small" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
