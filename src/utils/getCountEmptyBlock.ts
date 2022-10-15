import { DaysUnion } from '../models/CalendarDay';

const countEmptyBlock: Record<DaysUnion, number> = {
  mon: 0,
  tue: 1,
  wed: 2,
  thur: 3,
  fri: 4,
  sat: 5,
  sun: 6,
};

function getCountEmptyBlock(dayName: DaysUnion): number {
  return countEmptyBlock[dayName];
}

export default getCountEmptyBlock;
