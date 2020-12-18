import fs from 'fs';
import { getData } from '../controller/itemController';

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
    await getData(_req, reply);
  });
