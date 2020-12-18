import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

export default async (dates, { groupedCodes }) => {
  const keys = Object.keys(groupedCodes[0]);
  console.log(keys);
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Омс 2');
  worksheet.headerFooter.differentFirst = true;
  worksheet.headerFooter.firstHeader = 'sdsdfasdfasdf';
  const columns = keys.map((key) => ({ name: key, filterButton: true }));
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
  // Add row using key mapping to columns
  console.log(columns);
  // save workbook to disk
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
