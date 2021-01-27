module.exports = (sequelize, Sequelize) => {
  const Garden = sequelize.define("Garden", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name:{
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING)
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
  Garden.associate = models => {
   
  };
  return Garden;
};