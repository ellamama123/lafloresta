import React from 'react';
import Image from 'next/image';

import styles from './BlogItem.module.scss';
import assets from '../../../../../shared/assets';
import Text from '../../../../../shared/components/Text';
import Button from '../../../../../shared/components/Button';
import { ArrowRight } from '../../../../../shared/assets/icons/ArrowRight';
import { PostDTO } from '../../../../../api/types';

interface BlogItemProps {
  item: PostDTO
}

const BlogItem: React.FC<BlogItemProps> = ({item}) => {
  return (
    <div className={styles['blog-item']}>
      <Image src={item.imageSrc ? item.imageSrc :assets.OrangeFlower1} alt="Product Item" width={'200px'} height={'200px'}/>

      <div className={styles['blog-item-details']}>
        <Text.H4>{item.title}</Text.H4>

        <div classNames={[styles['blog-item-details-description']]} dangerouslySetInnerHTML={{ __html: item.short_desc.substring(0,100) }}>
        </div>

        <div className={styles['blog-item-details-cta']}>
          <Text.Body2 classNames={[styles['blog-item-details-cta-text']]}>
            {item?.date.substring(0,10)}
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
