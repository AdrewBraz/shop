import _ from 'lodash';
import itemController from '../controller/itemController';

export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/:', (_req, reply) => {
    const { id } = _req.params;
    console.log(_req)
    reply.send(itemController.getItem(id))
  })
