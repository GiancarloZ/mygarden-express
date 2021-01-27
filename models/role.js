module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("Role", {
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