'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:*/
    await queryInterface.createTable('products_colors', {
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      colors_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'colors',
          key: 'id'
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('products_colors');
  }
};
