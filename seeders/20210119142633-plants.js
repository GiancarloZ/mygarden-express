module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Plants', [{
      seedId: 1,
      gardenId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Plants', null, {});
  }
};
