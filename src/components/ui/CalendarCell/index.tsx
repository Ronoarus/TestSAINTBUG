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
  eventClick?: (event: EventForDay) => void;
}
export type { CalendarCellPropsTypes };
export { DayMode };

const CalendarCell = (props: CalendarCellPropsTypes) => {
  const {
    dayNumber,
    mode = DayMode.FUTURE,
    events = [],
    eventClick = () => {},
  } = props;

  return (
    <div className={styles.calendarCell}>
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
            event={event}
            isPast={mode === DayMode.PAST}
            onClick={eventClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarCell;
