import { MongoClient, MongoClientOptions } from 'mongodb'
import { MONGODB_VARS } from 'libs/config/vars'

let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

const connect = async () => {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }

  const client = await MongoClient.connect(
    MONGODB_VARS.uri,
    opts as MongoClientOptions
  )

  return {
    client,
    db: client.db(MONGODB_VARS.db)
  }
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = connect()
  }
  cached.conn = await cached.promise

  return cached.conn
}
