const Product = require('../models/Product');
const { index } = require('./UserController');
 
module.exports = {
 
  // Metodo para buscar todos os produtos
  async index(req, res) {
 
    // Chamamos o metodo findAll do sequelize
    // por trás dos panos SQL: SELECT * from products;
    const products = await Product.findAll();
 
    // Retornamos esse objeto via JSON.
    return res.json(products);
  },

  async getProduct(req, res) {
    // Pegamos o id do produto que será deletado pela rota.
    const { product_id } = req.params;
 
    // Buscamos no banco de dados esse produto atravez do método findByPk do sequelize (findByPrimaryKey)
    const product = await Product.findByPk(product_id);
 
    // Se o produto não existe retornamos um erro
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }
    
    // Retornamos o produto via JSON.
    return res.json(product);
  },
 
  // Metodo para adicionar um novo produto no DB
  async store (req, res) {
    // Pegamos da requisição as propriedades name, price e desc do JSON enviado pelo front-end.
    const { name, price, description } = req.body;
 
    // Criamos um novo produto, armazenamos no banco de dados via sequelize.
    const product = await Product.create({ name, price, description });
 
    // Retornamos o produto via JSON.
    return res.json(product);
  },
 
  // Metodo de deletar um produto
  async delete(req, res) {
 
    // Pegamos o id do produto que será deletado pela rota.
    const { product_id } = req.params;
 
    // Buscamos no banco de dados esse produto atravez do método findByPk do sequelize (findByPrimaryKey)
    const product = await Product.findByPk(product_id);
 
    // Se o produto não existe retornamos um erro
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }
 
    // Se o produto for encontrado, chamamos o metodo destroy do sequelize e passamos o ID a ser deletado.
    await product.destroy({ where: { id: product_id }});
 
    // Query SQL por trás do panos no sequelize:
    // DELETE FROM products WHERE id = $product_id;
 
    // Retornamos uma resposta json para confirmar a execução com sucesso.
    return res.json();
  },
 
  // Método para fazer update em um produto
  async update (req, res) {
    // Pegamos o id do produto que será feito o update pela rota.
    const { product_id } = req.params;
    // Pegamos os novos dados que o usuário digitou no front para atualizarmos esse produto via body.
    const { name, price, description } = req.body;
 
    // Buscamos no banco de dados esse produto atravez do método findByPk do sequelize (findByPrimaryKey)
    const product = await Product.findByPk(product_id);
    // Se o produto não existe retornamos um erro
    if (!product) {
      return res.status(400).json({ error: 'Product not found' });
    }
 
    // Se o produto existe, fazemos o update via o método update do sequelize.
    await product.update({
      name: name,
      price: price,
      description: description
    }, {
      where: {
        id : product_id
      }
    });
 
    // Query SQL por trás dos panos:
    // UPDATE products SET name = $name, price = $price, description = $description WHERE id = $product_id;
 
    // Metodo save para comitar e guardar as alterações nesse produto.
    await product.save();
 
    // Retornamos um json com o produto novo indicando que o update ocorreu com sucesso.
    return res.json();
  }
}
