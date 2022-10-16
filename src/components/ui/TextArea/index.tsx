import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface TextAreaPropsTypes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export type { TextAreaPropsTypes };

const TextArea = ({
  value = '',
  placeholder,
  disabled,
  onChange = () => {},
}: TextAreaPropsTypes) => {
  return (
    <textarea
      className={cn(styles.textArea, {
        [styles.textAreaFull]: value?.length,
      })}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextArea;
