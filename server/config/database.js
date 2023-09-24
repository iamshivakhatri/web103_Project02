import pg from 'pg'

//Connecting database to this server

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT
}

export const pool = new pg.Pool(config)
