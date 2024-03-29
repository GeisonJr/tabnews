import { Client } from 'pg'

export async function createClient() {
	const client = new Client({
		host: process.env.POSTGRES_HOST,
		port: Number(process.env.POSTGRES_PORT),
		database: process.env.POSTGRES_DB,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		ssl: process.env.NODE_ENV === 'production',
	})
	return client
}

export async function query(sql: string) {
	const client = await createClient()
	try {
		await client.connect()
		return await client.query(sql)
	} catch (error) {
		console.error(error)
		throw error
	} finally {
		await client.end()
	}
}
