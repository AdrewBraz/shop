import _ from 'lodash';

export default (router) => {
    return router
    .get('/',  (_req, reply) => {
      reply.view('index.pug');
    })
}