'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Permissions', [
    {
      name: 'create_user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'read_user',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'update_user',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'delete_user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'create_role',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'read_role',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'update_role',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'delete_role',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
