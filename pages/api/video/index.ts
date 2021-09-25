import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { isAuthorized } from 'libs/service/authorization'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { getAllVideos } from 'libs/service/db/video'

/**
 * Get all API yaml documents
 * @route /api/video
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
        const videos = await getAllVideos(db)
        return res.status(200).json(videos)
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
