module.exports = (sequelize, Sequelize) => {
  const plantImage = sequelize.define("plantImage", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    img: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    plantId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    stage: {
      type: Sequelize.STRING
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
  plantImage.associate = models => {
   
  };
  return plantImage;
};