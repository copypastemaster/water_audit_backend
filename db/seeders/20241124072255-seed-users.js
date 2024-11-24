// Seeder for inserting initial users into 'users' table
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        firstName: 'Alice',
        lastName: 'Johnson',
        roleId: 1, // Admin role
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Smith',
        roleId: 2, // User role
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: 'Charlie',
        lastName: 'Brown',
        roleId: 3, // Moderator role
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
