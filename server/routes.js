// @ts-check
import fs from 'fs';
import getOms2Data from '../controller/oms2Controller';
import getOms3Data from '../controller/oms3Controller';

export default (router) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/download', async (_req, reply) => {
    const file = fs.readFileSync(`${__dirname}/export.xlsx`);
    const stat = fs.statSync(`${__dirname}/export.xlsx`);
    reply.header('Content-Length', stat.size);
    reply.header('Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    reply.header('Content-Disposition', 'attachment; filename=export.xlsx');
    reply.send(file);
  })
  .get('/*', (_req, reply) => {
    reply.redirect('/');
  })
  .post('/oms2', async (_req, reply) => {
    console.log(_req.query);
    await getOms2Data(_req, reply, 'ОМС 2');
  })
  .post('/oms3', async (_req, reply) => {
    await getOms3Data(_req, reply, 'ОМС 3');
  });
