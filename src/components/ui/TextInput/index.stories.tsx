/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import TextInput, { TextInputPropsTypes } from './index';

export default {
  title: 'UI components/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputPropsTypes> = (args) => {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: '282px' }}>
      <TextInput {...args} value={value} onChange={setValue} />{' '}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Укажите краткое название',
};
