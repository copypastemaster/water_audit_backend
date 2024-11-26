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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      block: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lot: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completeAddress: {
        type: Sequelize.STRING,
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
      },
      isWaterCutOff: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      arrears: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('homeowners');
  }
};
