module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Gardens', [{
      name: "Gc's Garden",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gardens', null, {});
  }
};
