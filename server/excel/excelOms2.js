// @ts-check
import ExcelJS from 'exceljs';
import path from 'path';
import { parseISO, format } from 'date-fns';
import { ruNames } from '../../helpers';

export default async (dates, coll ) => {
  coll.forEach((item) => {
    item.TOTAL_PRICE = +item.TOTAL_PRICE;
  });

  const keys = Object.keys(coll[0]);
  const { from, to } = dates;
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Омс 2');
  worksheet.headerFooter.differentFirst = true;
  worksheet.headerFooter.firstHeader = 'sdsdfasdfasdf';
  const columns = keys.map((key) => (
    { name: ruNames[key], filterButton: true, style: { width: 15 } }));
  worksheet.mergeCells('A1:C1');
  worksheet.mergeCells('D1:F1');
  worksheet.getCell('A1').value = `Отчет за период с ${format(parseISO(from), 'dd-MM-yyyy')}`;
  worksheet.getCell('D1').value = `по ${format(parseISO(to), 'dd-MM-yyyy')}`;
  worksheet.addTable({
    name: 'MyTable',
    ref: 'A3',
    headerRow: true,
    totalsRow: true,
    displayName: 'medgroup',
    style: {
      theme: 'TableStyleLight19',
      showRowStripes: true,
    },
    columns,
    rows: coll.map((item) => Object.values(item)),
  });
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
