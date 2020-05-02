// Update with your config settings.
require('dotenv').config()

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

// const url =
//   'postgres://dzkpzxvhopcets:c8caf43a4ffb697e4c129853ea22e6cb29b5c1594e419ac2d3d46eb09b6f891f@ec2-52-87-135-240.compute-1.amazonaws.com:5432/d3fngf7i348dqf'

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.APP_DB_HOST,
    database: process.env.APP_DB_NAME,
    user: process.env.APP_DB_USER,
    port: process.env.APP_DB_PORT,
    password: process.env.APP_DB_PASSWORD,
    ssl: true
  },
  // connection: url + '?ssl=true',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}
