/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import EventForm, { EventFormPropsTypes } from './index';

export default {
  title: 'UI components/EventForm',
  component: EventForm,
} as Meta;

const Template: Story<EventFormPropsTypes> = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selected, setDate] = useState<Date | null>(null);

  const disableBtn = !title || !description || !selected;
  return (
    <div style={{ width: '360px' }}>
      <EventForm
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        selected={selected}
        setDate={setDate}
        onSubmit={() => alert('Alert!')}
        disableBtn={disableBtn}
      />
    </div>
  );
};

export const Default = Template.bind({});
