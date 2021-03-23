module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'admin',
      password: "123",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};