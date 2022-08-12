const getSecondsOfThisYearUntilNow = function () {
  const dateNow = new Date();
  const dateEnd = new Date(dateNow.getFullYear().toString());
  dateEnd.setMonth(7);
  dateEnd.setDate(31);
  const dateStart = new Date(dateNow.getFullYear().toString());

  return Math.round((dateEnd.getTime() - dateStart.getTime()) / 1000);
};

export default getSecondsOfThisYearUntilNow;
