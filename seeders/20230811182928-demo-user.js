'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Fuad',
      lastName: 'Hasan',
      email: 'fuad@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      firstName: 'Mahadi',
      lastName: 'Hasan',
      email: 'mahadi@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
