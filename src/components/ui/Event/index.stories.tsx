/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Event, { EventPropsTypes } from './index';

export default {
  title: 'UI components/Event',
  component: Event,
} as Meta;

const Template: Story<EventPropsTypes> = (args) => (
  <div style={{ width: '282px' }}>
    <Event {...args} />
  </div>
);
export const Default = Template.bind({});
Default.args = {
  event: {
    id: `${Date.now()}`,
    title: 'Example event name',
    description: 'Description about event',
    year: 2022,
    month: 9,
    day: 17,
  },
  isPast: false,
  onClick: console.log,
};
