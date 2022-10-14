/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';

interface EventPropsTypes {
  title: string;
  isPast?: boolean;
  onClick?: () => void;
}
export type { EventPropsTypes };

const Event = ({ title, isPast, onClick }: EventPropsTypes) => {
  return (
    <div
      className={cn(styles.eventWrapper, { [styles.past]: isPast })}
      onClick={onClick}
    >
      <span className={styles.eventText}>{title}</span>
    </div>
  );
};

export default Event;
