import { useCallback, useMemo, useState } from 'react';
import { DayMode } from '../components/ui/CalendarCell';
import dictionaryMonth from '../constants/dictionaryMonth';
import { EventForDay } from '../models/EventForDay';
import getCountEmptyBlock from '../utils/getCountEmptyBlock';
import getDays from '../utils/getDays';

type EventState = Record<string, EventForDay[]>;
const mockEvents: EventState = {
  '1992022': [
    {
      id: `${Date.now()}`,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      description: 'Description about event',
      year: 2022,
      month: 9,
      day: 17,
    },
  ],
  '1792022': [
    {
      id: `${Date.now()}`,
      title: 'Example event name',
      description: 'Description about event',
      year: 2022,
      month: 9,
      day: 17,
    },
    {
      id: `${Date.now() + 2}`,
      title: 'Apple',
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

  const [currentCalendar, countEmptyBlockStart] = useMemo(() => {
    const baseCalendar = getDays(year, month);
    const countEmptyBlock = getCountEmptyBlock(baseCalendar[0].dayName);

    const nowDate = new Date();
    const currentDayOfMonth = nowDate.getDate();
    const currentMonth = nowDate.getMonth();
    const currentYear = nowDate.getFullYear();

    const calendar = baseCalendar.map((value) => {
      const { dayNumber, month, year } = value;
      const key = `${dayNumber}${month}${year}`;

      const eventsForDay = events[key];

      const isHoliday = ['sat', 'sun'].includes(value.dayName);
      const isToday =
        currentDayOfMonth === dayNumber &&
        currentMonth === month &&
        currentYear === year;
      const isPast =
        new Date(year, month, dayNumber).getTime() <
        new Date(currentYear, currentMonth, currentDayOfMonth).getTime();

      let mode = DayMode.FUTURE;
      if (isPast) mode = DayMode.PAST;
      else if (isToday) mode = DayMode.TODAY;
      else if (isHoliday) mode = DayMode.HOLIDAY;

      return {
        ...value,
        events: eventsForDay,
        mode,
      };
    });

    return [calendar, countEmptyBlock];
  }, [month, year, events]);

  const countEmptyBlockEnd = useMemo(() => {
    const countBlocks = currentCalendar.length + countEmptyBlockStart;

    if (countBlocks <= 35) return 35 - countBlocks;
    if (countBlocks < 42) return 42 - countBlocks;

    return 0;
  }, [countEmptyBlockStart, currentCalendar.length]);

  const titleCalendar = useMemo(
    () => `${dictionaryMonth[month]} ${year}`,
    [month, year],
  );

  const addNewEvents = useCallback(
    (date: Date, title: string, description: string) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const dayOfMont = date.getDate();

      const key = `${dayOfMont}${month}${year}`;

      const newEvent: EventForDay = {
        id: `${Date.now()}`,
        title,
        description,
        year,
        month,
        day: dayOfMont,
      };

      setEvents((events) => {
        const cloneEvents: EventState = JSON.parse(JSON.stringify(events));
        if (cloneEvents?.[key]?.length === 2) {
          alert('Больше событий в день недоступно. В разработке');

          return events;
        }
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
    countEmptyBlockStart,
    countEmptyBlockEnd,
    addNewEvents,
    nextMonth,
    prevMonth,
  };
}

export default useCalendar;
