import getLastDayOfTheMonth from './getLastDayOfTheMonth.js';
import {daysOfTheWeekShort} from './getDateData.js';
import redoYear from './redoYear.js';

const populateCalendar = (year, month) => {
  const result = [];

  month = month.toString().length === 1 ? '0' + month : month;

  let yr = redoYear(year);
  let mt = '02';
  console.log(mt, yr);

  // if (Number(month) === 1 && Number(year) > 1) {
  //   mt = 12;
  //   yr = year - 1;
  // } else {
  //   mt = month - 1;
  //   yr = year;
  // }

  const lastDayOfTheMonth = getLastDayOfTheMonth(yr, mt);
  console.log('lastDay of the month', lastDayOfTheMonth);
  const weekDayIndex = new Date(`${yr}-${mt}-01`)
    .toString()
    .slice(0, 3)
    .toLowerCase();
  console.log('week day index', weekDayIndex);
  const index = daysOfTheWeekShort.indexOf(weekDayIndex);

  for (let i = 0; i < index; i += 1) {
    result.unshift(' ');
  }
  // const len = result.length;
  // const diff = 42 - len;

  // let lastIndex = marketDays.indexOf(lastMarketDay);

  for (let i = 1; i <= lastDayOfTheMonth; i += 1) {
    // if (lastIndex === 3) {
    //   lastIndex = -1;
    // }
    result.push(i);
    // lastIndex += 1;
  }

  const allWeeks = [];
  let counter = 0;
  for (let i = 1; i < 7; i++) {
    allWeeks.push(result.slice(counter, i * 7));
    counter += 7;
  }
  // console.log('allWeeks', allWeeks);
  return allWeeks;
};
console.log(populateCalendar(2022, 5));

export default populateCalendar;
