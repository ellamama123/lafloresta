import React from 'react';

import styles from './Badge.module.scss';

interface BadgeProps {
  children: React.ReactNode;
  count: number;

  // Optional params
  showZero?: boolean;
}
const Badge: React.FC<BadgeProps> = ({ children, count, showZero = false }) => {
  const shouldShowBadge = count > 0 || (count <= 0 && showZero);
  return (
    <div className={styles['badge']}>
      {shouldShowBadge && <div className={styles['badge-item']}>{count}</div>}

      {children}
    </div>
  );
};

export { Badge };
