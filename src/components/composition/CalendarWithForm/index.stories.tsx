/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import useCalendar from '../../../hooks/useCalendar';
import CalendarWithForm, { CalendarWithFormPropsTypes } from './index';
import { defaultBlack } from '../../../configs/storybookBackgrounds';

export default {
  title: 'UI components/CalendarWithForm',
  component: CalendarWithForm,
  parameters: {
    backgrounds: defaultBlack,
  },
  breakpoints: {
    breakpointNames: {
      small: '0',
      medium: '500',
      large: '1000',
    },
  },
} as Meta;

const Template: Story<CalendarWithFormPropsTypes> = () => {
  const {
    titleCalendar,
    currentCalendar,
    countEmptyBlockStart,
    countEmptyBlockEnd,
    addNewEvents,
    nextMonth,
    prevMonth,
  } = useCalendar();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setDate] = useState<Date | null>(null);

  const disableBtn = !title || !description || !selected;

  const submitForm = () => {
    addNewEvents(selected!, title, description);
    setDate(null);
    setTitle('');
    setDescription('');
  };

  return (
    <CalendarWithForm
      titleCalendar={titleCalendar}
      calendar={currentCalendar}
      countEmptyBlockStart={countEmptyBlockStart}
      countEmptyBlockEnd={countEmptyBlockEnd}
      nextMonth={nextMonth}
      prevMonth={prevMonth}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      selected={selected}
      setDate={setDate}
      onSubmit={submitForm}
      disableBtn={disableBtn}
      eventClick={console.log}
    />
  );
};

export const Default = Template.bind({});
