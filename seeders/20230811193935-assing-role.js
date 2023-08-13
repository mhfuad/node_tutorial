'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('role_permissions', [
      {
        RoleId: 1,
        PermissionId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        RoleId: 1,
        PermissionId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('user_roles', [
      {
        UserId: 1,
        RoleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        UserId: 2,
        RoleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
     await queryInterface.bulkDelete('role_permissions', null, {});
     await queryInterface.bulkDelete('user_roles', null, {});
  }
};
