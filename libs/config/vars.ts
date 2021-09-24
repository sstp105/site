export const isProd = process.env.NODE_ENV === 'production'

export const API_VARS = {
  baseUrl: isProd ? process.env.DOMAIN_PROD : process.env.DOMAIN_LOCAL,
  authorization: process.env.AUTHORIZATION_TOKEN
}

export const MONGODB_VARS = {
  uri: process.env.MONGODB_URI,
  db: process.env.MONGODB_DB,
  collections: {
    profile: process.env.MONGODB_COLLECTION_PROFILE,
    project: process.env.MONGODB_COLLECTION_PROJECTS,
    blog: process.env.MONGODB_COLLECTION_BLOGS,
    video: process.env.MONGODB_COLLECTION_VIDEOS,
    navigation: process.env.MONGODB_COLLECTION_NAVIGATIONS
  }
}
