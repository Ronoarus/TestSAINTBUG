/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import Event from '../Event';
import { EventForDay } from '../../../models/EventForDay';

enum DayMode {
  FUTURE = 'FUTURE',
  TODAY = 'TODAY',
  HOLIDAY = 'HOLIDAY',
  PAST = 'PAST',
}

interface CalendarCellPropsTypes {
  dayNumber: number;
  mode: DayMode;
  events?: EventForDay[];
  eventClick?: () => void;
}
export type { CalendarCellPropsTypes };
export { DayMode };

const CalendarCell = (props: CalendarCellPropsTypes) => {
  const { dayNumber, mode = DayMode.FUTURE, events = [], eventClick } = props;

  return (
    <div className={styles.calendarCell} onClick={eventClick}>
      <div
        className={cn(styles.numberWrapper, {
          [styles.today]: mode === DayMode.TODAY,
          [styles.holiday]: mode === DayMode.HOLIDAY,
          [styles.past]: mode === DayMode.PAST,
        })}
      >
        <span className={styles.dayNumber}>{dayNumber}</span>
      </div>
      <div className={styles.events}>
        {events.map((event) => (
          <Event
            key={event.id}
            title={event.title}
            isPast={mode === DayMode.PAST}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarCell;
