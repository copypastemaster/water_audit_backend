'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
   

    await queryInterface.bulkInsert('users', users, {});
    await queryInterface.bulkInsert('officers', officers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('officers', null, {});
    await queryInterface.bulkDelete('users', null, {});
  }
};
