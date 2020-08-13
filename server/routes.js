import _ from 'lodash';
import itemController from '../controller/itemController';
import { parseQuery } from '../src/helpers';
import item from '../models/item';

export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/store/:id', (_req, reply) => itemController.getItem(_req, reply))