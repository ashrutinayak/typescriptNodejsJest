require('dotenv').config()

module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
  pool: {
    max: 20,
    min: 0,
    idle: 10000
  },
  define: {
    paranoid: false,
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    statement_timeout: 20000 // 20 second
  }
}
