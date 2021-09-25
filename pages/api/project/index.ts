import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuthorized } from 'libs/service/authorization'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { getAllProjects } from 'libs/service/db/project'

/**
 * @route /api/project
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!isAuthorized(req)) {
    return Unauthorized(res)
  }

  const { method } = req
  const { db } = await connectToDatabase()

  try {
    switch (method) {
      case 'GET':
        const projects = await getAllProjects(db)
        return res.status(200).json(projects)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
