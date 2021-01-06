// @ts-check
import ExcelJS from 'exceljs';
import path from 'path';
import { parseISO, format } from 'date-fns';
import { ruNames, alphabetString } from '../../helpers';

const tableBuilder = (list, position, worksheet) => {
  list.forEach((item) => {
    item.TOTAL_PRICE = +item.TOTAL_PRICE;
  });
  const keys = Object.keys(list[0]);
  const r = keys.map((item) => ruNames[item]);
  console.log(keys, r, position);
  const columns = keys.map((key) => (
    { name: ruNames[key], filterButton: true, style: { width: 15 } }));
  worksheet.addTable({
    name: 'MyTable',
    ref: `${position}`,
    headerRow: true,
    totalsRow: true,
    displayName: 'medgroup',
    style: {
      theme: 'TableStyleLight19',
      showRowStripes: true,
    },
    columns,
    rows: list.map((item) => Object.values(item)),
  });
};

const sheetBuilder = async (coll, dates, name = 'OMS2') => {
  const { from, to } = dates;
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(`${name}`);
  worksheet.headerFooter.differentFirst = true;
  worksheet.headerFooter.firstHeader = `${name}`;
  worksheet.mergeCells('A1:C1');
  worksheet.mergeCells('D1:F1');
  worksheet.getCell('A1').value = `Отчет за период с ${format(parseISO(from), 'dd-MM-yyyy')}`;
  worksheet.getCell('D1').value = `по ${format(parseISO(to), 'dd-MM-yyyy')}`;
  let letter = 0;
  coll.length > 1 ? coll.forEach((item) => {
    const { length } = Object.keys(item[0]);
    tableBuilder(item, `${alphabetString[letter]}3`, worksheet);
    letter = length + 5;
  }) : tableBuilder(coll[0], 'A3', worksheet);
  worksheet.getCell('A3').alignment = { wrapText: true };
  worksheet.getCell('B3').alignment = { wrapText: true };
  worksheet.getCell('C3').alignment = { wrapText: true };
  worksheet.getCell('D3').alignment = { wrapText: true };
  worksheet.getCell('E3').alignment = { wrapText: true };
  worksheet.getCell('F3').alignment = { wrapText: true };
  worksheet.getCell('G3').alignment = { wrapText: true };
  worksheet.getCell('H3').alignment = { wrapText: true };
  await workbook
    .xlsx
    .writeFile(path.join(__dirname, '../export.xlsx'))
    .then(() => {
      console.log('saved');
    })
    .catch((err) => {
      console.log('err', err);
    });
};

export default async (dates, coll) => {
  await sheetBuilder(coll, dates);
};
