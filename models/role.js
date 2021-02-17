module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("role", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  Role.associate = models => {
    // Role.belongsToMany(models.User, { through: 'UserRoles' });
  };

  return Role;
};