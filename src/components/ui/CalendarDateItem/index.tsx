import React from 'react';
import cn from 'classnames';
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
} from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import styles from './index.module.scss';

import 'react-datepicker/dist/react-datepicker.css';

interface CalendarDateItemPropsTypes extends ReactDatePickerProps {}
export type { CalendarDateItemPropsTypes };

registerLocale('ru', ru);

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
      locale="ru"
    />
  );
};

export default CalendarDateItem;
