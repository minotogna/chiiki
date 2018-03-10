const pgp = require('pg-promise')({})

const config = process.env.DATABASE_URL
  ? {
    connectionString: process.env.DATABASE_URL,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    ssl: process.env.PGSSL === 'true',
  }
  : {
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    ssl: process.env.PGSSL === 'true',
  }

const db = pgp(config)

module.exports = db
