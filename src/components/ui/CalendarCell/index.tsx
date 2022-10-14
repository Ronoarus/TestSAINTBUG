/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
import Event from '../Event';
import { EventDay } from '../../../models/EventDay';

enum DayMode {
  FUTURE = 'FUTURE',
  TODAY = 'TODAY',
  HOLIDAY = 'HOLIDAY',
  PAST = 'PAST',
}

interface CalendarCellPropsTypes {
  numberDay: number;
  mode: DayMode;
  events?: EventDay[];
  eventClick?: () => void;
}
export type { CalendarCellPropsTypes };
export { DayMode };

const CalendarCell = (props: CalendarCellPropsTypes) => {
  const { numberDay, mode = DayMode.FUTURE, events = [], eventClick } = props;

  return (
    <div className={styles.calendarCell} onClick={eventClick}>
      <div
        className={cn(styles.numberWrapper, {
          [styles.today]: mode === DayMode.TODAY,
          [styles.holiday]: mode === DayMode.HOLIDAY,
          [styles.past]: mode === DayMode.PAST,
        })}
      >
        <span className={styles.numberDay}>{numberDay}</span>
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
