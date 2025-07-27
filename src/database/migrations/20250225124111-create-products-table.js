'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('products', { 
        id:{
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,

        },
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        category: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        path:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at :{
          type: Sequelize.STRING,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.STRING,
          allowNull: false,
        },

      });
     
  },

  async down (queryInterface, ) {
      await queryInterface.dropTable('products');
     
  },
};
