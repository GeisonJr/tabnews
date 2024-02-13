/* Dependencies */
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../../../infra/database'

/* Project */
import { ResponseData } from './types'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  console.log('Database:', await database.query())
  return res.status(200).send({ message: 'ok' })
}
