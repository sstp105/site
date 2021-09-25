import { Db } from 'mongodb'
import { ObjectId } from 'bson'

export const getAllProjects = async (db: Db) => {
  return db.collection('projects').find({}).toArray()
}

export const getProjectById = async (db: Db, _id: string) => {
  return db.collection('projects').findOne({ _id: new ObjectId(_id) })
}
