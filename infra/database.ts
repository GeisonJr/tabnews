import { Client } from 'pg'

async function query() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  })
  await client.connect()
  const res = await client.query('SELECT 1 + 1 as result')
  await client.end()

  return res
}

export default {
  query,
}
