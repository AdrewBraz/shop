import { getData } from '../controller/itemController'


export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .post('/', async(req, reply) => {
    console.log(req.body);
    getData(req, reply)
    reply.send()
  })