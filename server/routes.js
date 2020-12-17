import { getData } from '../controller/itemController';
import workBook from '../controller/workbook';
import writeFile from '../controller/writeFile'

export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/excel', async (_req, reply) => {
    await workBook(reply)
  })
  .get('/*', (_req, reply) => {
    reply.redirect('/');
  })
  .post('/oms2', async (req, reply) => {
    await writeFile(workBook, reply)
  });
