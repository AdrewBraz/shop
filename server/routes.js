// @ts-check
import fs from 'fs';
import multer from 'fastify-multer';
import getOms2Data from '../controller/oms2Controller';
import getOms3Data from '../controller/oms3Controller';
import storeData from '../controller/oms1Controller';
import parser from './excel/parser';
import oms1Parser from './excel/oms1JSONBuilder';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${path.join(__dirname, '../uploads')}`)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

const params = {
  oms2: ['1', 'Итого:'],
  oms3: ['Филиал', 'ВСЕГО'],
  oms1: [' - По плательщику и профилю', 'Всего']
}

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
    console.log(_req.path)
    reply.redirect('/');
  })
  .post('/oms2', async (_req, reply) => {
    await getOms2Data(_req, reply, 'ОМС 2');
  })
  .post('/oms3', async (_req, reply) => {
    await getOms3Data(_req, reply, 'ОМС 3');
  })
  .post('/parse',
  { preHandler: upload.single('excel') },
  async (_req, reply) => {
    const { date, report } = _req.body;
    const parserParams = params[report]
    const { path } = _req.file;
    const sheet = report === 'oms3' ? 'ОМС-3' : 'Sheet0';
    const data = await parser(path, parserParams, sheet)
    fs.unlink(_req.file.path,  (err) => {
      if (err) throw err;
      console.log(`${path} file was deleted`);
    })
    const result = oms1Parser(data)
    // await storeData(data, reply, date)
    await reply.send({data})
  }
)
