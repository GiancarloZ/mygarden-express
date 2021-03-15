module.exports = {
  development: {
    database: "my_garden_express_api_development",
    dialect: "postgres",
    password: "nachoz"
  },
  test: {
    database: "my_garden_express_api_test",
    dialect: "postgres"
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}