import { EventForDay } from './EventForDay';

export type DaysUnion = 'sun' | 'mon' | 'tue' | 'wed' | 'thur' | 'fri' | 'sat';

export interface CalendarDay {
  dayName: DaysUnion;
  dayNumber: number;
  month: number;
  year: number;
  events?: EventForDay[];
}
