import { Db } from 'mongodb'

export const getProfile = async (db: Db) => {
  return db.collection('profiles').findOne({})
}
