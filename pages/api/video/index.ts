import { connectToDatabase } from 'libs/config/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Get all API yaml documents
 * @route /api/video
 */
export interface IVideoApiRequest extends NextApiRequest {
  _id: string
}

export default async (req: IVideoApiRequest, res: NextApiResponse) => {
  const { method, headers } = req
  const { db } = await connectToDatabase()

  try {
    switch (method) {
      case 'GET':
        if (headers.authorization !== process.env.AUTHORIZATION_TOKEN) {
          return res.status(401).json({
            message: 'Unauthorized'
          })
        }
        const apiDoc = await db.collection('videos').find({}).toArray()
        return res.status(200).json(apiDoc)
      default:
        throw new Error('Invalid HTTP Request Method')
    }
  } catch (err) {
    return res.status(500).json({
      message: '500 Internal Server Error',
      error: err
    })
  }
}
