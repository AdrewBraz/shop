import ExcelJS from 'exceljs';
import path from 'path';
import { ruNames } from '../src/helpers';

export default async (dates, { groupedCodes }) => {
  const keys = Object.keys(ruNames);
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Омс 2');
  worksheet.headerFooter.differentFirst = true;
  worksheet.headerFooter.firstHeader = 'sdsdfasdfasdf';
  const columns = keys.map((key) => ({ name: ruNames[key], filterButton: true }));
  console.log(columns)
  worksheet.addTable({
    name: 'MyTable',
    ref: 'A1',
    headerRow: true,
    totalsRow: true,
    displayName: 'medgroup',
    style: {
      theme: 'TableStyleMedium1',
      showRowStripes: true,
    },
    columns,
    rows: groupedCodes.map((item) => Object.values(item)),
  });
  worksheet.getCell('A1').alignment = { wrapText: true };
  worksheet.getCell('B1').alignment = { wrapText: true };
  worksheet.getCell('C1').alignment = { wrapText: true };
  worksheet.getCell('D1').alignment = { wrapText: true };
  worksheet.getCell('E1').alignment = { wrapText: true }
  worksheet.getCell('F1').alignment = { wrapText: true }
  worksheet.getCell('G1').alignment = { wrapText: true }
  worksheet.getCell('H1').alignment = { wrapText: true }
  await workbook
    .xlsx
    .writeFile(path.join(__dirname, '../server/export.xlsx'))
    .then(() => {
      console.log('saved');
    })
    .catch((err) => {
      console.log('err', err);
    });
};
