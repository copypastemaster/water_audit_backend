'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('homeowners', {
      id: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
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
        references: {
          model: 'address',
          key: 'id',
        }
      },
      previousWaterReading: {
        type: Sequelize.INTEGER,
      },
      currentWaterReading: {
        type: Sequelize.INTEGER,
      },
      toPay: {
        type: Sequelize.INTEGER,
      },
      isWaterCutOff: {
        type: Sequelize.BOOLEAN,
      },
      arrears: {
        type: Sequelize.INTEGER,
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
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('homeowners');
  }
};
