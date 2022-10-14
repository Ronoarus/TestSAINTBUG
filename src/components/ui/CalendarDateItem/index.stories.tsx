/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import CalendarDateItem, { CalendarDateItemPropsTypes } from './index';

export default {
  title: 'UI components/CalendarDateItem',
  component: CalendarDateItem,
} as Meta;

const Template: Story<CalendarDateItemPropsTypes> = (args) => {
  const [selected, onChange] = useState<Date | null>(new Date());

  return <CalendarDateItem {...args} selected={selected} onChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholderText: 'ДД.ММ.ГГ',
};
