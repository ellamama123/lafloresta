import React from 'react';

import { c } from '../../../shared/utils/classNameParser';
import styles from './FieldItem.module.scss';

interface FieldItemProps {
  classNames?: string[];
  texts: string[];
  TextComponent: React.ElementType;
}

const FieldItem: React.FC<FieldItemProps> = ({
  texts,
  TextComponent,
  classNames = [],
}) => {
  return (
    <div className={c([styles['field-item'], ...classNames])}>
      {texts.map((text) => (
        <TextComponent key={text}>{text}</TextComponent>
      ))}
    </div>
  );
};

export default FieldItem;
