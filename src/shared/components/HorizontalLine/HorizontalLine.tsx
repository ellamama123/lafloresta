import React from 'react';

import { c } from '../../utils/classNameParser';
import styles from './HorizontalLine.module.scss';

interface HorizontalLineProps {
  classNames?: string[];
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ classNames = [] }) => {
  return <div className={c([styles['horizontal-line'], ...classNames])}></div>;
};

export default HorizontalLine;
