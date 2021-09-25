import { Db } from 'mongodb'
import { ObjectId } from 'bson'

export const getAllBlogs = async (db: Db) => {
  return db.collection('blogs').find({}).toArray()
}

export const getBlogById = async (db: Db, _id: string) => {
  return await db.collection('blogs').findOne({ _id: new ObjectId(_id) })
}
