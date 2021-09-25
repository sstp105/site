import { ObjectId } from 'bson'
import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  InternalServerError,
  MethodNotAllowed,
  Unauthorized
} from 'libs/service/httpErrorHandler'
import { updateVideoThumsUpById } from 'libs/service/db/video'

/**
 * Get all API yaml documents
 * @route /api/video
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req
  const { db } = await connectToDatabase()

  const _id = query._id as string
  const voteType = query.voteType as 'up' | 'down'

  try {
    switch (method) {
      case 'PUT':
        await updateVideoThumsUpById(db, _id, voteType)
        return res.status(200).json({
          message: 'Update successfully'
        })
      default:
        return MethodNotAllowed(res)
    }
  } catch (err) {
    return InternalServerError(res)
  }
}
