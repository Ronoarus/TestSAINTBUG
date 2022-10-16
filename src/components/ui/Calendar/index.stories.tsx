/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';
import useCalendar from '../../../hooks/useCalendar';
import Calendar, { CalendarPropsTypes } from './index';

export default {
  title: 'UI components/Calendar',
  component: Calendar,
} as Meta;

const Template: Story<CalendarPropsTypes> = () => {
  const {
    titleCalendar,
    currentCalendar,
    countEmptyBlockStart,
    countEmptyBlockEnd,
    nextMonth,
    prevMonth,
  } = useCalendar();

  return (
    <Calendar
      titleCalendar={titleCalendar}
      calendar={currentCalendar}
      countEmptyBlockStart={countEmptyBlockStart}
      countEmptyBlockEnd={countEmptyBlockEnd}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
    />
  );
};

export const Default = Template.bind({});
