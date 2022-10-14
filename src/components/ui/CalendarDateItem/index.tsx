import React from 'react';
import cn from 'classnames';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import styles from './index.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

interface CalendarDateItemPropsTypes extends ReactDatePickerProps {}
export type { CalendarDateItemPropsTypes };

const CalendarDateItem = (props: CalendarDateItemPropsTypes) => {
  const { selected, dateFormat = 'dd.MM.yyyy' } = props;
  return (
    <DatePicker
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      dateFormat={dateFormat}
      className={cn(styles.textInput, {
        [styles.textInputFull]: Boolean(selected),
      })}
      popperModifiers={[
        {
          name: 'arrow',
          options: {
            padding: 110,
          },
        },
      ]}
    />
  );
};

export default CalendarDateItem;
