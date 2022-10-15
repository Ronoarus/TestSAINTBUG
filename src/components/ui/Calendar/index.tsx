\import React from 'react';
import styles from './index.module.scss';
import { CalendarDay } from '../../../models/CalendarDay';
import CalendarCell, { CalendarCellPropsTypes } from '../CalendarCell';
import dayNames from '../../../constants/dayNames';

type CalendarType = CalendarDay & Pick<CalendarCellPropsTypes, 'mode'>;

interface CalendarPropsTypes {
  titleCalendar?: string;
  nextMonth?: () => void;
  prevMonth?: () => void;
  calendar?: CalendarType[];
  countEmptyBlocks?: number;
}
export type { CalendarPropsTypes };

const Calendar = (props: CalendarPropsTypes) => {
  const {
    titleCalendar,
    calendar = [],
    countEmptyBlocks = 0,
    nextMonth,
    prevMonth,
  } = props;

  return (
    <div>
      <div>
        <button onClick={prevMonth} type="button">
          -
        </button>
        <span>{titleCalendar}</span>
        <button onClick={nextMonth} type="button">
          +
        </button>
      </div>
      <div>
        {dayNames.map((name) => (
          <div key={name}>{name.toUpperCase()} </div>
        ))}
        {Array.from(Array(countEmptyBlocks).keys()).map((index) => (
          <div key={index} />
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
      </div>
    </div>
  );
};

export default Calendar;
