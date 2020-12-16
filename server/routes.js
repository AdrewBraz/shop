import { getData } from '../controller/itemController';

export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/*', (_req, reply) => {
    reply.redirect('/');
  })
  .post('/oms2', async (req, reply) => {
    await getData(req, reply);
  });
