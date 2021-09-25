import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuthorized } from 'libs/service/authorization'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { getNavigationByPathName } from 'libs/service/db/navigation'

/**
 * @route /api/navigation/:_id
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!isAuthorized(req)) {
    return Unauthorized(res)
  }

  const { method, query } = req
  const { db } = await connectToDatabase()
  const _id = query._id as string

  try {
    switch (method) {
      case 'GET':
        const navigation = await getNavigationByPathName(db, _id)
        return res.status(200).json(navigation)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
