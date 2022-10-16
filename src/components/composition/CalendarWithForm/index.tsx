import React from 'react';
import styles from './index.module.scss';
import Calendar, { CalendarPropsTypes } from '../../ui/Calendar';
import EventForm, { EventFormPropsTypes } from '../EventForm';

interface CalendarWithFormPropsTypes
  extends CalendarPropsTypes,
    EventFormPropsTypes {}
export type { CalendarWithFormPropsTypes };

const CalendarWithForm = (props: CalendarWithFormPropsTypes) => {
  const {
    titleCalendar,
    calendar,
    countEmptyBlockStart,
    countEmptyBlockEnd,
    nextMonth,
    prevMonth,
    eventClick,

    title,
    setTitle,
    description,
    setDescription,
    selected,
    setDate,
    onSubmit,
    disableBtn,
  } = props;

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Календарь</span>
      <div className={styles.innerWrapper}>
        <Calendar
          titleCalendar={titleCalendar}
          calendar={calendar}
          countEmptyBlockStart={countEmptyBlockStart}
          countEmptyBlockEnd={countEmptyBlockEnd}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          eventClick={eventClick}
        />
        <div className={styles.formWrapper}>
          <EventForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            selected={selected}
            setDate={setDate}
            onSubmit={onSubmit}
            disableBtn={disableBtn}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarWithForm;
