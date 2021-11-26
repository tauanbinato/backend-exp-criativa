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
  },

  async delete(req, res) {
    const { product_id } = req.params;

    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    await product.destroy({ where: { id: product_id }});

    return res.json();
  },

  async update (req, res) {
    const { product_id } = req.params;
    const { name, price, description } = req.body;

    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }

    await product.update({
      name: name,
      price: price,
      description: description
    }, {
      where: {
        id : product_id
      }
    });

    await product.save();
    
    return res.json();
  }
}