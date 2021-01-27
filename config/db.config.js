module.exports = {
    HOST: "localhost",
    USER: "gzaba",
    PASSWORD: "nachoz",
    DB: "my_garden_express_api_development",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };