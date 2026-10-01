import express from 'express';
import clientRoutes from './clientRoutes.js';

const routes = (app) => {
    app.route('/')
        .get((req, res) => {
            res.status(200).send('API NodeJS Express MongoDB running...')
        })

    app.use(express.json(),
    clientRoutes,
    );
};

export default routes;