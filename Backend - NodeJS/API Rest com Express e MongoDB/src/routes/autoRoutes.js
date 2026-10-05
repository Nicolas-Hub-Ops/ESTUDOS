import express from "express";
import AutoController from "../controllers/autoController.js";

const routes = express.Router();

routes.get('/autos', AutoController.getAllAuto);
routes.get('/autos/search', AutoController.getAutoByFilter);
routes.get('/autos/:id', AutoController.getAutoById);
routes.post('/autos', AutoController.createAuto);
routes.put('/autos/:id', AutoController.updateAuto);
routes.delete('/autos/:id', AutoController.deleteAuto);

export default routes;