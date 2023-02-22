import React from 'react';

import { c } from '../../utils/classNameParser';
import styles from './Button.module.scss';

interface ButtonProps {
  children: string | React.ReactNode;
  mode?: 'filled' | 'text' | 'outlined' | 'cta';
  classNames?: string[];
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  mode = 'filled',
  children,
  classNames = [],
  onClick = () => {},
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={c([
        styles['button'],
        styles[mode],
        ...classNames,
        disabled ? styles['button-disabled'] : '',
      ])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
