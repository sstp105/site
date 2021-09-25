import { connectToDatabase } from 'libs/config/mongodb'
import { isAuthorized } from 'libs/service/authorization'
import { getBlogById } from 'libs/service/db/blog'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * blog by _id API handler
 * @route /api/blog/:_id
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
        const blog = await getBlogById(db, _id)
        return res.status(200).json(blog)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    console.log(err)
    return InternalServerError(res)
  }
}
