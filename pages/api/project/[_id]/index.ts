import { ObjectId } from 'bson'
import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuthorized } from 'libs/service/authorization'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { getProjectById } from 'libs/service/db/project'

/**
 * @route /api/project/:_id
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!(await isAuthorized(req))) {
    return Unauthorized(res)
  }

  const { method, query } = req
  const { db } = await connectToDatabase()
  const _id = query._id as string

  try {
    switch (method) {
      case 'GET':
        const navigationData = await getProjectById(db, _id)
        return res.status(200).json(navigationData)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
