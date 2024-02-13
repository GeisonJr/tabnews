export interface ResponseData {
	updated_at: string
	database: {
		version: string
		max_connections: number
		active_connections: number
	}
}
