import express from 'express';
import customerRoutes from './customerRoutes.js';
import autoRoutes from './autoRoutes.js';

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send('API NodeJS Express MongoDB running...')
        })

    app.use(express.json(),
    customerRoutes,
    autoRoutes,
    );
};

export default routes;