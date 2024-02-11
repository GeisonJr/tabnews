/* Dependencies */
import type { NextApiRequest, NextApiResponse } from 'next'

/* Project */
import { ResponseData } from './types'

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<ResponseData>,
) {
	return res.status(200).send({ message: 'ok' })
}
