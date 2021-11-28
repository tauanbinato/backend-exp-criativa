const express = require('express');

const UserController = require('./controllers/UserController');
// Importamos o Controlador de Produtos
const ProductController = require('./controllers/ProductController');
const AddressController = require('./controllers/AddressController');
const TechController = require('./controllers/TechController');
const ReportController = require('./controllers/ReportController');

const routes = express.Router();

// Rota padrão
routes.get('/', (req,res) => {
    res.send('hello world');
});

// Post
routes.post('/products', ProductController.store);
// Get
routes.get('/products', ProductController.index);
// Delete
routes.delete('/products/:product_id/', ProductController.delete);
// Update
routes.post('/products/:product_id/', ProductController.update);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/addresses', AddressController.index);
routes.post('/users/:user_id/addresses', AddressController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

routes.get('/report', ReportController.show);

module.exports = routes;