import { useCallback, useMemo, useState } from 'react';
import dictionaryMonth from '../constants/dictionaryMonth';
import { EventForDay } from '../models/EventForDay';
import getCountEmptyBlock from '../utils/getCountEmptyBlock';
import getDays from '../utils/getDays';

type EventState = Record<string, EventForDay[]>;
const mockEvents: EventState = {
  '1792022': [
    {
      id: `${Date.now()}`,
      title: 'Example event name',
      description: 'Description about event',
      year: 2022,
      month: 9,
      day: 17,
    },
  ],
};

function useCalendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [events, setEvents] = useState(mockEvents);

  const [currentCalendar, countEmptyBlock] = useMemo(() => {
    const baseCalendar = getDays(year, month);
    const countEmptyBlock = getCountEmptyBlock(baseCalendar[0].dayName);

    const calendar = baseCalendar.map((value) => {
      const { dayNumber, month, year } = value;
      const key = `${dayNumber}${month}${year}`;
      const eventsForDay = events[key];

      return {
        ...value,
        events: eventsForDay,
      };
    });

    return [calendar, countEmptyBlock];
  }, [month, year, events]);

  const titleCalendar = useMemo(
    () => `${dictionaryMonth[month]} ${year}`,
    [month, year],
  );

  const addNewEvents = useCallback(
    (date: Date, title: string, description: string) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();

      const key = `${day}${month}${year}`;

      const newEvent: EventForDay = {
        id: `${Date.now()}`,
        title,
        description,
        year,
        month,
        day,
      };

      setEvents((events) => {
        const cloneEvents: EventState = JSON.parse(JSON.stringify(events));
        cloneEvents[key] = (cloneEvents[key] || []).concat([newEvent]);

        return cloneEvents;
      });
    },
    [],
  );

  const changeMonth = useCallback(
    (delta: number) => () => {
      let newMoth = month + delta;
      let newYear = year;
      if (newMoth > 11) {
        newMoth = 0;
        newYear += 1;
      } else if (newMoth < 0) {
        newMoth = 11;
        newYear -= 1;
      }

      setMonth(newMoth);
      setYear(newYear);
    },
    [month, year],
  );

  const nextMonth = useCallback(changeMonth(1), [changeMonth]);
  const prevMonth = useCallback(changeMonth(-1), [changeMonth]);

  return {
    titleCalendar,
    currentCalendar,
    countEmptyBlock,
    addNewEvents,
    nextMonth,
    prevMonth,
  };
}

export default useCalendar;