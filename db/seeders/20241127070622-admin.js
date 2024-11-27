'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      firstName: 'Admin',
      lastName: 'Admin',
      block: 'Admin',
      lot: 'Admin',
      street: 'Admin',
      completeAddress: 'Admin',
      isHomeowner: false,
      isOfficer: false,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin', null, {});
  }
};
