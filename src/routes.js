const express = require('express');

const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

routes.get('/', (req,res) => {
    res.send('hello world');
})

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;