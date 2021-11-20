const { Model, DataTypes } = require('sequelize');

class Product extends Model {
  static init(connection) {
    // Não precisamos informar id nem timestamps pois por padrão o methodo herdado já sabe. 
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