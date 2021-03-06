'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seedId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      gardenId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      plantDate: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      stage:{
        type: Sequelize.STRING,
        defaultValue: "SEED"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plants');
  }
};