import { ObjectId } from 'bson'
import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Get all API yaml documents
 * @route /api/video
 */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req
  const { db } = await connectToDatabase()
  const _id = query._id as string

  try {
    switch (method) {
      case 'PUT':
        const voteType = query.voteType
        const value = voteType === 'up' ? 1 : voteType === 'down' ? -1 : 0
        await db
          .collection('videos')
          .updateOne({ _id: new ObjectId(_id) }, { $inc: { thumbsUp: value } })
        return res.status(200).json({
          message: 'Update successfully'
        })
      default:
        throw new Error('Invalid HTTP Request Method')
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: '500 Internal Server Error',
      error: err
    })
  }
}
