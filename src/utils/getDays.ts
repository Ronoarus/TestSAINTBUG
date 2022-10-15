import dayNames from '../constants/dayNames';
import { CalendarDay } from '../models/CalendarDay';

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
      id: `${year}${monthIndex}${date.getDate()}`,
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
}

export default getDays;
