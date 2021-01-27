module.exports = (sequelize, Sequelize) => {
  const Plant = sequelize.define("Plant", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    seedId: {
      type: Sequelize.INTEGER,
      // primaryKey: true,
      allowNull: false
    },
    gardenId: {
      type: Sequelize.INTEGER,
      // primaryKey: true,
      allowNull: false
    },
    plantDate: {
      type: Sequelize.DATEONLY
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
  Plant.associate = models => {
   
  };
  return Plant;
};