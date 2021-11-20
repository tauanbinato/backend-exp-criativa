const Product = require('../models/Product');
const { index } = require('./UserController');

module.exports = {

  async index(req, res) {
    const products = await Product.findAll();

    return res.json(products);
  },

  async store (req, res) {
    const { name, price, description } = req.body;

    const product = await Product.create({ name, price, description });

    return res.json(product);
  }
}