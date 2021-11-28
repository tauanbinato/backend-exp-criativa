const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(connection) {
    // Chamamos o método construtor do Sequelize, passamos name, price, description para criar um novo produto.
    super.init({
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.STRING(2555),
    }, 
    {
      sequelize: connection
    })
  }

  static associate(models) {
    this.hasMany(models.Product, { foreignKey: 'product_id', as: 'products' });
  }
}

module.exports = Product;