import { Db } from 'mongodb'

export const getAllNavigations = async (db: Db) => {
  return db.collection('navigations').find({}).toArray()
}

export const getNavigationByPathName = async (db: Db, _id: string) => {
  return db.collection('navigations').findOne({ pathname: _id })
}
