// @ts-check

import path from 'path';
import Pug from 'pug';
import fastify from 'fastify';
import pointOfView from 'point-of-view';
import fastifyStatic from 'fastify-static';
import fastifySession from 'fastify-session';
import _ from 'lodash';
import mongoose from 'mongoose';
import fastifyMongo from 'fastify-mongodb';
import addRoutes from './routes.js';

const isProduction = process.env.NODE_ENV === 'production';
const appPath = path.join(__dirname, '..');
const isDevelopment = !isProduction;
const uri = "mongodb+srv://oms:rknpk6446@cluster0.pm8jq.mongodb.net/oms2?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

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

const setUpMutlipart = (app) => {
  app.register(require('fastify-multipart'))
}

const setUpStaticAssets = (app) => {
  app.register(fastifyStatic, {
    root: path.join(appPath, 'dist/public'),
    prefix: '/assets',
  });
};

export default (state = {}) => {
  const app = fastify();

  setUpViews(app);
  setUpStaticAssets(app);
  setUpMutlipart(app)
  addRoutes(app);

  return app;
};
