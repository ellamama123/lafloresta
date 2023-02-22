import React from 'react';

import styles from './Text.module.scss';
import { c } from '../../utils/classNameParser';

interface TextProps {
  classNames?: string[];
}

interface H1Props extends TextProps {}
const H1: React.FC<H1Props> = ({ children, classNames = [] }) => {
  return (
    <h1 className={c([styles['h1'], styles['title'], ...classNames])}>
      {children}
    </h1>
  );
};

interface H2Props
  extends TextProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {}
const H2: React.FC<H2Props> = ({ children, classNames = [] }) => {
  return (
    <h2 className={c([styles['h2'], styles['title'], ...classNames])}>
      {children}
    </h2>
  );
};

interface H3Props
  extends TextProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {}
const H3: React.FC<H3Props> = ({ children, classNames = [] }) => {
  return (
    <h3 className={c([styles['h3'], styles['title'], ...classNames])}>
      {children}
    </h3>
  );
};

interface H4Props
  extends TextProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {}
const H4: React.FC<H4Props> = ({ children, classNames = [] }) => {
  return (
    <h4 className={c([styles['h4'], styles['title'], ...classNames])}>
      {children}
    </h4>
  );
};

interface H5Props
  extends TextProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {}
const H5: React.FC<H5Props> = ({ children, classNames = [] }) => {
  return (
    <h4 className={c([styles['h5'], styles['title'], ...classNames])}>
      {children}
    </h4>
  );
};

interface Body1Props
  extends TextProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {}
const Body1: React.FC<Body1Props> = ({ children, classNames = [] }) => {
  return (
    <p className={c([styles['body-1'], styles['body'], ...classNames])}>
      {children}
    </p>
  );
};

interface Body2Props
  extends TextProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    > {}
const Body2: React.FC<Body2Props> = ({ children, classNames = [] }) => {
  return (
    <p className={c([styles['body-2'], styles['body'], ...classNames])}>
      {children}
    </p>
  );
};

const Text = {
  H1,
  H2,
  H3,
  H4,
  H5,
  Body1,
  Body2,
};

export default Text;
