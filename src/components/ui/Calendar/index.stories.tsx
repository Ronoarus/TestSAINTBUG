/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import CalendarCell, { CalendarCellPropsTypes, DayMode } from './index';

export default {
  title: 'UI components/CalendarCell',
  component: CalendarCell,
} as Meta;

const Template: Story<CalendarCellPropsTypes> = (args) => (
  <CalendarCell {...args} />
);
export const Default = Template.bind({});
Default.args = {
  numberDay: 10,
  mode: DayMode.FUTURE,
  events: [
    {
      id: 1,
      title: 'Long name of the event in calendar',
      description: 'Long name of the event in calendar',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Long name of the event in calendar',
      description: 'Long name of the event in calendar',
      date: new Date(),
    },
  ],
};
