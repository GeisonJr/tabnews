/* Dependencies */
import type { NextApiRequest, NextApiResponse } from 'next'
import * as database from '@infra/database'

/* Project */
import { ResponseData } from './types'

export default async function handler(
	_req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	const updatedAt = new Date().toISOString()

	// Get the version
	const dbVersion = await database.query('SHOW server_version;')
	const dbVersionValue = dbVersion.rows[0].server_version

	// Get the max connections
	const dbMaxCons = await database.query('SHOW max_connections;')
	const dbMaxConsValue = parseInt(dbMaxCons.rows[0].max_connections)

	// Get the active connections
	const dbActCons = await database.query(
		'SELECT COUNT(*) FROM pg_stat_activity WHERE datname = current_database();',
	)
	const dbActConsValue = parseInt(dbActCons.rows[0].count)

	return res.status(200).json({
		updated_at: updatedAt,
		database: {
			version: dbVersionValue,
			max_connections: dbMaxConsValue,
			active_connections: dbActConsValue,
		},
	})
}
