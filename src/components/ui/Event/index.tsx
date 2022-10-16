/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useCallback } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import { EventForDay } from '../../../models/EventForDay';

interface EventPropsTypes {
  event: EventForDay;
  isPast?: boolean;
  onClick?: (event: EventForDay) => void;
}
export type { EventPropsTypes };

const Event = ({ event, isPast, onClick }: EventPropsTypes) => {
  const handleClick = useCallback(() => onClick?.(event), [event, onClick]);

  return (
    <div
      className={cn(styles.eventWrapper, { [styles.past]: isPast })}
      onClick={handleClick}
    >
      <span className={styles.eventText}>{event.title}</span>
    </div>
  );
};

export default Event;
