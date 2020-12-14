import fs from 'fs';
import util from 'util';
import { pipeline } from 'stream';

const pipe = util.promisify(pipeline)

export default (router, str) => router
  .get('/', (_req, reply) => {
    reply.view('index.pug');
  })
  .post('/', async(req, reply) => {
    console.log(req);
    const data = await req.file;
    console.log(req);
    data.file // stream
    data.fields // other parsed parts
    data.fieldname
    data.filename
    data.encoding
    data.mimetype

    await pump(data.file, fs.createWriteStream(data.filename))
    reply.send()
  })