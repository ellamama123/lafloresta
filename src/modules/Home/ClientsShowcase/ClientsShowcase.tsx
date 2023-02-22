import Image from 'next/image';
import React, { useContext } from 'react';

import assets from '../../../shared/assets';
import Text from '../../../shared/components/Text';
import { ViewportDimensionContext } from '../../../shared/contexts/ViewportDimensionContext';
import { c } from '../../../shared/utils/classNameParser';
import styles from './ClientsShowcase.module.scss';

interface ClientsShowcaseProps {
  classNames?: string[];
}

const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({
  classNames = [],
}) => {
  const { width } = useContext(ViewportDimensionContext);
  const CLIENTS_PER_VIEW = 5;

  return (
    <section className={c([styles['clients-showcase'], ...classNames])}>
      <Text.H2 classNames={[styles['clients-showcase-title']]}>
        Khách hàng
      </Text.H2>

      <div className={styles['clients-showcase-carousel']}>
        <div className={styles['clients-showcase-carousel-content']}>
          {[...Array(CLIENTS_PER_VIEW * 2)].map((_, i) => (
            <Image
              key={i}
              src={assets.BlueFlower1}
              alt="Clown Z"
              width={width / CLIENTS_PER_VIEW}
              height={width / CLIENTS_PER_VIEW}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsShowcase;
