import _ from 'lodash';
import itemController from '../controller/itemController';

export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .get('/store/:id', function(_req, reply){
    const { id } = _req.params;
    const db = this.mongo.db;
    db.collection(`beer`, async (err, col) => {
    try{
      for await(const doc of col.find()){
        console.log(doc)
      }
      } catch(err){
      console.log(err)
    }
    })
  })
