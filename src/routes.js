import { Router } from 'express';
import multer from 'multer';
import multerconfig from './config/multer';
import authmiddlewares from '../src/app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import productController from './app/controllers/productController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
import CreatepaymentIntentController from './app/controllers/CreatepaymentIntentController';

const routes = new Router();

const upload = multer(multerconfig);

routes.post('/users', UserController.store); // Cadastro
routes.post('/session', SessionController.store); // Login

routes.use(authmiddlewares); // será chamado por todas a rotas ABAIXO

// Produtos
routes.post('/products', upload.single('file'), productController.store);
routes.get('/products', productController.index);
routes.put('/products/:id', upload.single('file'), productController.update);

// Categorias
routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

// Pedidos
routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

routes.post('/create-payment-intent',CreatepaymentIntentController.store);

export default routes;
