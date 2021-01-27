'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'UserRoles',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        roleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }
    );

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserRoles');
  }
};
