'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: 'Nevera',
        description: 'Wirlpool',
        price: 55.45,
        discount: 10,
        image: '',
        categories_id: 1
      },
      {
        name: 'Camara',
        description: 'Nikon',
        price: 104.45,
        discount: 50,
        image: '',
        categories_id: 1
      },
      {
        name: 'Bicicleta',
        description: 'GW',
        price: 180.15,
        discount: 15,
        image: '',
        categories_id: 1
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
