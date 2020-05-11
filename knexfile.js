// Update with your config settings.
require('dotenv').config()

const url = process.env.DATABASE_URL
let connection
if (url) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0
  connection = url + '?ssl=true'
} else {
  connection = {
    host: process.env.APP_DB_HOST,
    database: process.env.APP_DB_NAME,
    user: process.env.APP_DB_USER,
    port: process.env.APP_DB_PORT,
    password: process.env.APP_DB_PASSWORD
  }
}

module.exports = {
  client: 'mysql',
  connection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
