import React from 'react';

import { c } from '../../utils/classNameParser';
import TabItem from './TabItem';

export interface TabItemData {
  label: string;
  key: string;
}

interface TabProps<T extends TabItemData> {
  items: Array<T>;
  // eslint-disable-next-line no-unused-vars
  isItemSelected: (item: T) => boolean;
  // eslint-disable-next-line no-unused-vars
  onTabSelect: (item: T) => void;
  classNames?: string[];
}

function Tab<T extends TabItemData>({
  items,
  isItemSelected,
  onTabSelect,
  classNames = [],
}: TabProps<T>) {
  return (
    <div role="tablist" className={c(classNames)}>
      {items.map((item) => (
        <TabItem
          key={item.key}
          item={item}
          selected={isItemSelected(item)}
          onTabSelect={() => onTabSelect(item)}
        />
      ))}
    </div>
  );
}

export default Tab;
