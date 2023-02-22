import React from 'react';

import Text from '../Text';
import styles from './PageHeader.module.scss';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <header className={styles['page-header']}>
      <Text.H1 classNames={[styles['page-header-text']]}>{title}</Text.H1>
    </header>
  );
};

export default PageHeader;
