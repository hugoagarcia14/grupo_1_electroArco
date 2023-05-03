'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products_colors', [
      {
        product_id: 4,
        color_id:1
      },
      {
        product_id: 4,
        color_id:2
      },
      {
        product_id: 5,
        color_id:3
      },
      {
        product_id: 6,
        color_id:4
      },
      {
        product_id: 6,
        color_id:5
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products_colors', null, {});
  }
};
