import ExcelJS from 'exceljs';
import fs from 'fs';
import { getData } from '../controller/itemController';

export default (router) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/download', async (_req, reply) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('ExampleSheet');
    worksheet.columns = [
      { header: 'Package', key: 'package_name' },
      { header: 'Author', key: 'author_name' },
    ];

    // Add row using key mapping to columns
    worksheet.addRow(
      { package_name: 'ABC', author_name: 'Author 1' },
      { package_name: 'XYZ', author_name: 'Author 2' },
    );

    // Add rows as Array values
    worksheet
      .addRow(['BCD', 'Author Name 3']);

    // Add rows using both the above of rows
    const rows = [
      ['FGH', 'Author Name 4'],
      { package_name: 'PQR', author_name: 'Author 5' },
    ];

    worksheet
      .addRows(rows);

    // save workbook to disk
    await workbook
      .xlsx
      .writeFile(`${__dirname}/export.xlsx`)
      .then(() => {
        console.log('saved');
      })
      .catch((err) => {
        console.log('err', err);
      });

    const file = fs.readFileSync(`${__dirname}/export.xlsx`);
    console.log(file);
    const stat = fs.statSync(`${__dirname}/export.xlsx`);
    reply.header('Content-Length', stat.size);
    reply.header('Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    reply.header('Content-Disposition', 'attachment; filename=export.xlsx');
    console.log(stat);
    reply.send(file);
  })
  .get('/*', (_req, reply) => {
    reply.redirect('/');
  })
  .post('/oms2', async (_req, reply) => {
    await getData(_req, reply);
  });
