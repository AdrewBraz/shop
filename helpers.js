// @ts-check
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

const ruNames = {
  ORD_NAME: 'Наименование отделения',
  COD: 'Код услуги',
  NAME: 'Наименование услуги',
  TYPE: 'тип',
  USL: 'Кол-во услуг за период',
  NUM_USL: 'Кол-во услуг за период',
  NUM_DV: 'Кол-во движений (по счету) за период',
  NUM_DOC: 'Кол-во документов за период',
  NUM_CI: 'Кол-во карт за период',
  TOTAL_PRICE: 'Суммарная стоимость услуг (руб) за период',
};

const formatter = (date) => {
  const localeFormat = new Intl.DateTimeFormat('ru', { month: 'long' });
  return localeFormat.format(date);
};
const listOfYears = getList(new Date(2017, 12, 1), addYears, new Date(2020, 1, 1));
const listOfMonths = getList(new Date(2017, 12, 1), addMonths, new Date(2018, 12, 1));

export {
  listOfMonths, listOfYears, formatter, ruNames,
};
