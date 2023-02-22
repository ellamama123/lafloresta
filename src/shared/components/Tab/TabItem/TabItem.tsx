import React from 'react';

import { c } from '../../../utils/classNameParser';
import Text from '../../Text';
import { TabItemData } from '../Tab';
import styles from './TabItem.module.scss';

interface TabItemProps {
  item: TabItemData;
  selected: boolean;
  onTabSelect: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ item, selected, onTabSelect }) => {
  return (
    <button
      className={c([
        styles['tab-item'],
        selected ? styles['tab-item-selected'] : '',
      ])}
      onClick={onTabSelect}
    >
      <Text.Body2
        classNames={[
          selected ? styles['tab-item-selected'] : styles['tab-item-text'],
        ]}
      >
        {item.label}
      </Text.Body2>
    </button>
  );
};

export default TabItem;
