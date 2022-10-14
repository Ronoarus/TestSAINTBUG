/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextArea, { TextAreaPropsTypes } from './index';

export default {
  title: 'UI components/TextArea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaPropsTypes> = (args) => {
  const [value, setValue] = React.useState('');

  return <TextArea {...args} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter value',
};
