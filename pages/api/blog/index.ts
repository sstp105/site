import { connectToDatabase } from 'libs/config/mongodb'
import { isAuthorized } from 'libs/service/authorization'
import { getAllBlogs } from 'libs/service/db/blog'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * blog API handler
 * @route /api/blog
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
        const blogs = await getAllBlogs(db)
        return res.status(200).json(blogs)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
