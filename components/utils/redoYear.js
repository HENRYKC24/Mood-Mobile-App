const redoYear = year => {
  const realYeah = Number(year);
  const yearLength = String(realYeah).length;
  let yearDiff = 4 - yearLength;
  if (yearDiff < 0) {
    yearDiff = 0;
  }
  const mainYear = '0'.repeat(yearDiff) + realYeah;
  return mainYear;
};

export default redoYear;
