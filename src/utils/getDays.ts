import { CalendarDay, DaysUnion } from '../models/CalendarDay';

const dayNames: DaysUnion[] = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thur',
  'fri',
  'sat',
];

/**
 * monthIndex in range(0, 11)
 */
function getDays(year: number, monthIndex: number): CalendarDay[] {
  const date = new Date(year, monthIndex, 1);
  const result: CalendarDay[] = [];

  while (date.getMonth() === monthIndex) {
    result.push({
      dayName: dayNames[date.getDay()],
      dayNumber: date.getDate(),
      month: monthIndex,
      year,
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
}

export default getDays;
