'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('homeowners', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
      },
      previousWaterReading: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      currentWaterReading: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      toPay: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
      isWaterCutOff: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      arrears: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('homeowners');
  }
};
