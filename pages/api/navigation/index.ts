import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuthorized } from 'libs/service/authorization'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { getAllNavigations } from 'libs/service/db/navigation'

/**
 * @route /api/navigation
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
        const navigations = await getAllNavigations(db)
        return res.status(200).json(navigations)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
