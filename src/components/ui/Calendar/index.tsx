import React from 'react';
import InlineSVG from 'react-inlinesvg';
import styles from './index.module.scss';
import { CalendarDay } from '../../../models/CalendarDay';
import CalendarCell, { CalendarCellPropsTypes } from '../CalendarCell';
import dayNames from '../../../constants/dayNames';
import { LeftArrow, RightArrow } from '../../../media/icons';

type CalendarType = CalendarDay & Pick<CalendarCellPropsTypes, 'mode'>;

interface CalendarPropsTypes {
  titleCalendar?: string;
  nextMonth?: () => void;
  prevMonth?: () => void;
  calendar?: CalendarType[];
  countEmptyBlockStart?: number;
  countEmptyBlockEnd?: number;
}
export type { CalendarPropsTypes };

const Calendar = (props: CalendarPropsTypes) => {
  const {
    titleCalendar,
    calendar = [],
    countEmptyBlockStart = 0,
    countEmptyBlockEnd = 0,
    nextMonth,
    prevMonth,
  } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <InlineSVG
          src={LeftArrow}
          onClick={prevMonth}
          className={styles.icon}
        />
        <span className={styles.titleCalendar}>{titleCalendar}</span>
        <InlineSVG
          src={RightArrow}
          onClick={nextMonth}
          className={styles.icon}
        />
      </div>
      <div className={styles.calendar}>
        {dayNames.map((name) => (
          <div key={name} className={styles.dayName}>
            {name.toUpperCase()}
          </div>
        ))}
        {Array.from(Array(countEmptyBlockStart).keys()).map((index) => (
          <div key={`${index}-start`} className={styles.emptyBlock} />
        ))}
        {calendar.map(({ id, dayNumber, mode, events }) => {
          return (
            <CalendarCell
              key={id}
              dayNumber={dayNumber}
              events={events}
              mode={mode}
            />
          );
        })}
        {Array.from(Array(countEmptyBlockEnd).keys()).map((index) => (
          <div key={`${index}-end`} className={styles.emptyBlock} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
