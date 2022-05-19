require('dotenv').config()
console.log(process.env.NODE_ENV)
module.exports = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.NODE_ENV==='test' ? process.env.TEST_DB_DATABASE : process.env.DB_DATABASE,
  username: process.env.NODE_ENV==='test' ? process.env.TEST_DB_USERNAME : process.env.DB_USERNAME,
  password: process.env.NODE_ENV==='test' ? process.env.TEST_DB_PASSWORD : process.env.DB_PASSWORD,
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
