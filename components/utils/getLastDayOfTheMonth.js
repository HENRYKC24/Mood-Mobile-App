import makeTwoOrMoreDigits from './makeTwoOrMoreDigits.js';

const getLastDayOfTheMonth = (year, month) => {
  month = makeTwoOrMoreDigits(month);
  const yearLength = String(year).length;
  let yearDiff = 4 - yearLength;
  if (yearDiff < 0) {
    yearDiff = 0;
  }
  const mainYear = '0'.repeat(yearDiff) + year;
  let lastDay = 28;
  for (let i = lastDay; i < 32; i += 1) {
    const exists = new Date(`${mainYear}-${month}-${i}`).getDate() === i;
    if (exists) {
      lastDay = i;
    } else {
      break;
    }
  }
  return lastDay;
};

export default getLastDayOfTheMonth;
