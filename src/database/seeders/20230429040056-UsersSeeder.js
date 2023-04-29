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
    await queryInterface.bulkInsert('users', [
      {
      dni: '0001112223',
      first_name: 'Rafael',
      last_name: 'Losty',
      email: 'closty0@rambler.ru',
      phone: '3128192722',
      address: 'Calle 1 #1-21',
      password: 'hzCntF',
      image: ' ',
      roles_id: 3
    },
    {
      dni: '1111222333',
      first_name: 'Hugo',
      last_name: 'Garcia',
      email: 'hugogarcia10@rambler.ru',
      phone: '31381925722',
      address: 'Calle 5 #1-23',
      password: 'hzCntFc5',
      image: ' ',
      roles_id: 2
    },
    {
      dni: '33334444555',
      first_name: 'Melany',
      last_name: 'Perez',
      email: 'melanyperez02@rambler.ru',
      phone: '3115733918',
      address: 'Calle 25b #1-28',
      password: 'xx1.ss',
      image: ' ',
      roles_id: 1
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
    await queryInterface.bulkDelete('users', null, {});
  }
};
