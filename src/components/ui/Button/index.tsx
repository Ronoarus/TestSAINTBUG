import React, { PropsWithChildren } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

enum ButtonTheme {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

interface ButtonPropsTypes extends PropsWithChildren {
  disabled?: boolean;
  theme?: ButtonTheme;
  onClick?: () => void;
}

export type { ButtonPropsTypes };
export { ButtonTheme };

const Button = (props: ButtonPropsTypes) => {
  const {
    children,
    disabled,
    theme = ButtonTheme.PRIMARY,
    onClick = () => {},
  } = props;

  return (
    <button
      type="button"
      className={cn(styles.button, {
        [styles.buttonPrimary]: theme === ButtonTheme.PRIMARY,
        [styles.buttonSecondary]: theme === ButtonTheme.SECONDARY,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
