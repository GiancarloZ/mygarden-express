module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('gardens', [{
      name: "Gc's Spice Garden",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: "Gc's Tomato Garden",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      name: "Gc's Pepper Garden",
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
  ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('gardens', null, {});
  }
};
