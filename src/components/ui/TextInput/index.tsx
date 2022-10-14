import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface TextInputPropsTypes {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}
export type { TextInputPropsTypes };

const TextInput = ({
  value,
  placeholder,
  disabled,
  onChange = () => {},
}: TextInputPropsTypes) => {
  return (
    <input
      className={cn(styles.textInput, {
        [styles.textInputFull]: value?.length,
      })}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextInput;
