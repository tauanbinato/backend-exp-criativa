'use strict';

// sequelize.org/master/manual/data-types.html ---- 
module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.STRING(2555),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('products');
  }
};
