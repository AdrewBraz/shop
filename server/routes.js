import _ from 'lodash';

export default (router) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  });
