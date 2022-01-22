import { connectToDatabase } from 'libs/config/mongodb'
import { isAuthorized } from 'libs/service/authorization'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { getProfile } from 'libs/service/db/profile'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * profile API handler
 * @route /api/profile
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!(await isAuthorized(req))) {
    return Unauthorized(res)
  }

  const { method } = req
  const { db } = await connectToDatabase()

  try {
    switch (method) {
      case 'GET':
        const profile = await getProfile(db)
        return res.status(200).json(profile)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
