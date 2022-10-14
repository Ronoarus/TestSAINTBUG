import React from 'react';

import CalendarDateItem from '../../ui/CalendarDateItem';
import TextInput from '../../ui/TextInput';
import TextArea from '../../ui/TextArea';
import Button from '../../ui/Button';

import styles from './index.module.scss';

interface EventFormPropsTypes {
  selected: Date | null;
  title: string;
  description: string;

  setDate: (value: Date | null) => void;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;

  disableBtn?: boolean;
  onSubmit: () => void;
}
export type { EventFormPropsTypes };

const EventForm = (props: EventFormPropsTypes) => {
  const {
    selected,
    title,
    description,

    setDate,
    setTitle,
    setDescription,

    disableBtn,
    onSubmit,
  } = props;

  return (
    <div className={styles.eventForm}>
      <span className={styles.headerText}>Добавить событие</span>
      <CalendarDateItem
        selected={selected}
        onChange={setDate}
        placeholderText="ДД.ММ.ГГ"
      />
      <TextInput
        value={title}
        onChange={setTitle}
        placeholder="Укажите краткое название"
      />
      <TextArea
        value={description}
        onChange={setDescription}
        placeholder="Введите описание"
      />

      <Button disabled={disableBtn} onClick={onSubmit}>
        Добавить
      </Button>
    </div>
  );
};

export default EventForm;
