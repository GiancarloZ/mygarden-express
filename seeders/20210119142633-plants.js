module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('plants', [{
      seedId: 1,
      gardenId: 1,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 2,
      gardenId: 1,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 2,
      gardenId: 1,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 3,
      gardenId: 2,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 1,
      gardenId: 2,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 1,
      gardenId: 3,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 1,
      gardenId: 3,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      seedId: 2,
      gardenId: 3,
      plantDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('plants', null, {});
  }
};
