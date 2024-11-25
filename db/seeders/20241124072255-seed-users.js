// Seeder for inserting initial users into 'users' table
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        firstName: 'Enoch',
        lastName: 'Binas',
        roleId: 1, // Admin role
        subdivision: 'Neo Vista Homes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Marlon',
        lastName: 'Penkian',
        roleId: 2, // User role
        subdivision: 'Neo Vista Homes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: 'Maam',
        lastName: 'Majo',
        roleId: 3, // Officerr role
        subdivision: 'Neo Vista Homes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
