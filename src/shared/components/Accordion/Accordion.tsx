import React, { useState } from 'react';
import { AiOutlinePlus as Plus, AiOutlineMinus as Minus } from 'react-icons/ai';

import { c } from '../../utils/classNameParser';
import Text from '../Text';
import styles from './Accordion.module.scss';

interface AccordionProps {
  classNames?: string[];
  title: string;
  details: string;
}

const Accordion: React.FC<AccordionProps> = ({
  classNames = [],
  title,
  details,
}) => {
  const [open, toggleOpen] = useState(false);

  const Icon = open ? Minus : Plus;

  return (
    <details
      onClick={() => toggleOpen((prevState) => !prevState)}
      className={c([styles['accordion'], ...classNames])}
    >
      <summary className={styles['accordion-summary']}>
        <Text.Body1>{title}</Text.Body1>
        <Icon />
      </summary>

      <Text.Body1>{details}</Text.Body1>
    </details>
  );
};

export default Accordion;
