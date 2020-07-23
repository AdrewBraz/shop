// @ts-check

import path from 'path';
import Pug from 'pug';
import fastify from 'fastify';
import pointOfView from 'point-of-view';
import fastifyStatic from 'fastify-static';
import fastifyMongo from 'fastify-mongodb'
import _ from 'lodash';
import addRoutes from './routes.js';

const isProduction = process.env.NODE_ENV === 'production';
const appPath = path.join(__dirname, '..');
const isDevelopment = !isProduction;

const setUpViews = (app) => {
  const domain = isDevelopment ? 'http://localhost:8080' : '';
  app.register(pointOfView, {
    engine: {
      pug: Pug,
    },
    defaultContext: {
      assetPath: (filename) => `${domain}/assets/${filename}`,
    },
    templates: path.join(__dirname, 'views'),
  });
};

const setUpStaticAssets = (app) => {
  app.register(fastifyStatic, {
    root: path.join(appPath, 'dist/public'),
    prefix: '/assets',
  });
  // app.register(fastifyMongo, {
  //   forceClose: true,
  //   url: 'mongodb://Mos:KHq.Wd87isFt4XF@ds040167.mlab.com:40167/restik'
  // })
};

export default (state = {}) => {
  const app = fastify();

  setUpViews(app);
  setUpStaticAssets(app);

  addRoutes(app);

  return app;
};