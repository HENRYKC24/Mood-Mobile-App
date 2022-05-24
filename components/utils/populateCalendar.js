import getLastDayOfTheMonth from './getLastDayOfTheMonth.js';
import {daysOfTheWeekShort} from './getDateData.js';
import redoYear from './redoYear.js';

const populateCalendar = (year, month) => {
  const result = [];

  month = month.toString().length === 1 ? '0' + month : month;

  let yr = redoYear(year);
  let mt = month;

  const lastDayOfTheMonth = getLastDayOfTheMonth(yr, mt);

  const weekDayIndex = new Date(`${yr}-${mt}-01`)
    .toString()
    .slice(0, 3)
    .toLowerCase();

  const index = daysOfTheWeekShort.indexOf(weekDayIndex);

  for (let i = 0; i < index; i += 1) {
    result.unshift(' ');
  }

  for (let i = 1; i <= lastDayOfTheMonth; i += 1) {
    result.push(i);
  }

  const allWeeks = [];
  let counter = 0;

  for (let i = 1; i < 7; i++) {
    allWeeks.push(result.slice(counter, i * 7));
    counter += 7;
  }

  return allWeeks;
};

export default populateCalendar;
