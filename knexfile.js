// Update with your config settings.
require('dotenv').config()

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

const url = process.env.DATABASE_URL

module.exports = {
  client: 'pg',
  // connection: {
  //   host: process.env.APP_DB_HOST,
  //   database: process.env.APP_DB_NAME,
  //   user: process.env.APP_DB_USER,
  //   port: process.env.APP_DB_PORT,
  //   password: process.env.APP_DB_PASSWORD,
  //   ssl: true
  // },
  connection: url + '?ssl=true',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
