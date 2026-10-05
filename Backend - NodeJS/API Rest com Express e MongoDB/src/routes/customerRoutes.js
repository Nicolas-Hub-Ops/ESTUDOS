import express from 'express';
import CustomerController from '../controllers/customerController.js';

const routes = express.Router();

routes.get('/customers', CustomerController.getAllCustomers);
routes.get('/customers/search', CustomerController.getCustomerByFilter);
routes.get('/customers/:id', CustomerController.getCustomerById);
routes.post('/customers', CustomerController.createCustomer);
routes.put('/customers/:id', CustomerController.updateCustomer);
routes.delete('/customers/:id', CustomerController.deleteCustomer);

export default routes;