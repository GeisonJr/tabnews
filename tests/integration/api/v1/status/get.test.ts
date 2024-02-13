test('Get to /api/v1/status should return 200', async () => {
	const response = await fetch('http://localhost:3000/api/v1/status')
	expect(response.status).toBe(200)

	const body = await response.json()
	console.log(body)

	// Check if the date is valid
	const parsedDate = new Date(body.updated_at).toISOString()
	expect(parsedDate).toEqual(body.updated_at)

	// Check if the database version is valid
	expect(body.database.version).toEqual('16.1')

	// Check if the max connections is valid
	expect(body.database.max_connections).toEqual(100)

	// Check if the active connections is valid
	expect(body.database.active_connections).toEqual(1)
})
