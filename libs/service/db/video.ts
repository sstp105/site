import { Db } from 'mongodb'
import { ObjectId } from 'bson'

export const getAllVideos = async (db: Db) => {
  return db.collection('videos').find({}).toArray()
}

export const updateVideoThumsUpById = async (
  db: Db,
  _id: string,
  voteType: 'up' | 'down'
) => {
  const value = voteType === 'up' ? 1 : voteType === 'down' ? -1 : 0

  return db
    .collection('videos')
    .updateOne({ _id: new ObjectId(_id) }, { $inc: { thumbsUp: value } })
}

export const updateVideoVoteById = async (
  _id: string,
  voteType: 'up' | 'down'
) => {
  fetch(`api/video/${_id}?voteType=${voteType}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
