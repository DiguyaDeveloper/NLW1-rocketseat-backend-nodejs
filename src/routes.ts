import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItemsController();

// Index - list Todos, show - List 1, create, update, delete

routes.get('/items', itensController.index);
routes.post('/points', pointsController.create);
routes.post('/points', pointsController.index);
routes.post('/points/:id', pointsController.show);

export default routes;
