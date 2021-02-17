module.exports = (sequelize, Sequelize) => {
    const userRole = sequelize.define("userRole", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        userId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
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
    });
    
    return userRole;
  };