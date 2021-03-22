require('dotenv').config();
module.exports = {
  development: {
    database: "my_garden_express_api_development",
    dialect: "postgres",
    password: 'nachoz'
  },
  test: {
    database: process.env.DATABASE,
    dialect: "postgres"
  },
  production: {
    use_env_variable: DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}