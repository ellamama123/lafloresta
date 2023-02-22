import { FieldConfig, useField } from 'formik';
import React from 'react';

import { c } from '../../../utils/classNameParser';
import Text from '../../Text';
import styles from './Radio.module.scss';

interface RadioProps extends FieldConfig<any> {
  label: string;
  classNames?: string[];
  onBlur?: (e: React.FocusEvent) => void;
}

const Radio: React.FC<RadioProps> = ({
  label,
  classNames = [],
  onBlur = () => {},
  ...props
}) => {
  const [field] = useField(props);

  return (
    <label
      className={c([
        styles['radio'],
        ...classNames,
        field.checked ? styles['radio-checked'] : '',
      ])}
    >
      <input {...field} {...props} onBlur={onBlur} />
      <Text.Body1
        classNames={[
          styles['radio-label'],
          field.checked ? styles['radio-label-checked'] : '',
        ]}
      >
        {label}
      </Text.Body1>
    </label>
  );
};

export default Radio;
