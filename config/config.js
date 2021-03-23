require('dotenv').config();
module.exports = {
  development: {
    database: process.env.DATABASE,
    dialect: "postgres",
    password: process.env.DATABASE_PASSWORD
  },
  test: {
    database: process.env.DATABASE,
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}