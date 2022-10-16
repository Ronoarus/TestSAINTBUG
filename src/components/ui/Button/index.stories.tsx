/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import Button, { ButtonPropsTypes, ButtonTheme } from './index';

export default {
  title: 'UI components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonPropsTypes> = (args) => {
  const { children, ...otherArgs } = args;

  return (
    <div style={{ width: '282px' }}>
      <Button {...otherArgs}>{children} </Button>
    </div>
  );
};

const baseArgs = {
  children: 'Добавить',
  theme: ButtonTheme.PRIMARY,
  onClick: () => alert('Click'),
};

export const Primary = Template.bind({});
Primary.args = baseArgs;

export const Secondary = Template.bind({});
Secondary.args = { ...baseArgs, theme: ButtonTheme.SECONDARY };
