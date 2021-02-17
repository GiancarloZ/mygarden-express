module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      name: 'ADMIN',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'MODERATOR',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'USER',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};

