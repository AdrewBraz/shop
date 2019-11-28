'use strict';

import express from 'express';
import http  from 'http';
import cors  from 'cors';
import bodyParser  from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config';

const compiler = webpack(config)

export default () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.set('view engine', 'pug')

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: { colors: true },
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log,
}));
  app.use(express.static(`${__dirname}/../public/dist/`));

  app.get('*', function(req, res) {
    console.log()
    res.render('index');
  });

  const server = http.createServer(app);
  return server;
}
