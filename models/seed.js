module.exports = (sequelize, Sequelize) => {
  const Seed = sequelize.define("Seed", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    scientificName: {
      type: Sequelize.STRING
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    },
    summary: {
      type: Sequelize.STRING
    },
    daysToSprout: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    },
    daysToMaturity: {
      type: Sequelize.INTEGER
    },
    heightAtMaturity: {
      type: Sequelize.INTEGER
    },
    rowSpacing: {
      type: Sequelize.INTEGER
    },
    plantSpacing: {
      type: Sequelize.INTEGER
    },
    plantingDepth: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    howToGrow: {
      type: Sequelize.TEXT
    },
    company: {
      type: Sequelize.STRING
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
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
  Seed.associate = models => {
    // Role.belongsToMany(models.User, { through: 'UserRoles' });
  };

  return Seed;
};