import { addMonths, addYears } from 'date-fns';

const getList = (start, fn, end) => {
  const list = [];
  let interim = start;
  while (interim < end) {
    list.push(interim);
    interim = fn(interim, 1);
  }
  return list;
};

const listOfYears = getList(new Date(2017, 12, 1), addYears, new Date(2020, 1, 1));
const listOfMonths = getList(new Date(2017, 12, 1), addMonths, new Date(2018, 12, 1));

export {
   listOfMonths, listOfYears
};
