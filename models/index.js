'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// attach models
db.user = require("../models/user.js")(sequelize, Sequelize);
db.role = require("../models/role.js")(sequelize, Sequelize);
db.userRole = require("../models/userRole.js")(sequelize, Sequelize);
db.garden = require("../models/garden.js")(sequelize, Sequelize);
db.seed = require("../models/seed.js")(sequelize, Sequelize);
db.plant = require("../models/plant.js")(sequelize, Sequelize);
db.plantImage = require("../models/plantImage.js")(sequelize, Sequelize);

// list associations below
db.role.belongsToMany(db.user, {
  through: "userRole",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "userRole",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.seed.belongsToMany(db.garden, {
  through: "plant",
  foreignKey: "seedId",
  otherKey: "gardenId"
});
db.garden.belongsToMany(db.seed, {
  through: "plant",
  as: "planted",
  foreignKey: "gardenId",
  otherKey: "seedId"
});

db.user.hasMany(db.garden, {
  foreignKey: 'userId'
});
db.garden.belongsTo(db.user, {
  foreignKey: "userId"
});

db.user.hasMany(db.seed, {
  foreignKey: "userId",
});
db.seed.belongsTo(db.user);
db.plantImage.belongsTo(db.plant);



module.exports = db;
