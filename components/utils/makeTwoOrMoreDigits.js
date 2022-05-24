const makeTwoOrMoreDigits = date => {
  const dateLen = date.toString().length;
  const moreThan1Digits = dateLen === 1 ? `0${date}` : date;
  return moreThan1Digits;
};

export default makeTwoOrMoreDigits;
