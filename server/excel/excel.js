// @ts-check
import ExcelJS from 'exceljs';
import path from 'path';
import { parseISO, format } from 'date-fns';
import { ruNames, alphabetString } from '../../helpers';

const tableBuilder = (list, worksheet, position = 0) => {
  list.forEach((item) => {
    item.TOTAL_PRICE = +item.TOTAL_PRICE;
  });
  const keys = Object.keys(list[0]);
  const length = keys.length + position;
  const columns = keys.map((key) => (
    { name: ruNames[key], filterButton: true, style: { width: ruNames[key].length } }));
  worksheet.addTable({
    name: 'MyTable',
    ref: `${alphabetString[position]}3`,
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
  let i = position;
  while (i < length) {
    worksheet.getCell(`${alphabetString[i]}3`).alignment = { wrapText: true };
    i++;
  }
};

const sheetBuilder = async (coll, dates, workbook) => {
  const { from, to } = dates;
  const worksheet = workbook.addWorksheet('Report');
  worksheet.headerFooter.differentFirst = true;
  worksheet.headerFooter.firstHeader = 'Report';
  worksheet.mergeCells('A1:C1');
  worksheet.mergeCells('D1:F1');
  worksheet.getCell('A1').value = `Отчет за период с ${format(parseISO(from), 'dd-MM-yyyy')}`;
  worksheet.getCell('D1').value = `по ${format(parseISO(to), 'dd-MM-yyyy')}`;
  tableBuilder(coll, worksheet);
};

export default async (dates, coll) => {
  const workbook = new ExcelJS.Workbook();
  sheetBuilder(coll, dates, workbook);
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
