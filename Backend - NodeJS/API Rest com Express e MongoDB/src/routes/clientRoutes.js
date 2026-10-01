import express from 'express';
import ClientController from '../controllers/clientController.js';

const routes = express.Router();

routes.get('/clients', ClientController.getClients);
routes.get('/clients/search', ClientController.getClientFilted);
routes.get('/clients/:id', ClientController.getClientById);
routes.post('/clients', ClientController.createClient);
routes.put('/clients/:id', ClientController.updateClient);
routes.delete('/clients/:id', ClientController.deleteClient);

export default routes;