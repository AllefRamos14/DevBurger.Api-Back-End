import express from 'express';
import routes from './routes.js';
import { resolve } from 'node:path';
import cors from 'cors';

import './database';

class App {
  constructor() {
    this.app = express();

    this.app.use(cors());
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000 }));
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );

    this.app.use(
        '/category-file',
        express.static(resolve(__dirname, '..', 'uploads')),
      );
  }
  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
