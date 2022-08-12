const countOfWorkingDays = function () {
  //Set the basics
  const dateNow = new Date();
  const dateEnd = new Date(dateNow.getUTCFullYear().toString());
  dateEnd.setMonth(7);
  dateEnd.setDate(31);
  dateEnd.setHours(23);
  dateEnd.setMinutes(59);
  dateEnd.setSeconds(59);
  const dateStart = new Date(dateNow.getUTCFullYear().toString());
  dateStart.setHours(0);
  console.log(dateEnd, dateStart);
  //Calculate 1
  let days = Math.ceil((dateEnd - dateStart) / 1000 / 60 / 60 / 24);
  const weeks = Math.floor(days / 7);
  days = days - weeks * 2;

  // Calculate 2
  const startDay = dateStart.getDay();
  const endDay = dateEnd.getDay();

  // Remove weekend not previously removed.
  if (startDay - endDay > 1) days = days - 2;
  // Remove start day if span starts on Sunday but ends before Saturday
  if (startDay == 0 && endDay != 6) days = days - 1;

  // Remove end day if span ends on Saturday but starts after Sunday
  if (endDay == 6 && startDay != 0) days = days - 1;

  return days;
};
/* console.log(countOfWorkingDays()); */

export default countOfWorkingDays;
