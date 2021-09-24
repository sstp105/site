import { API_VARS } from './vars'

const HEADERS = {
  headers: {
    Authorization: process.env.AUTHORIZATION_TOKEN
  }
}

const ROUTES = (route: string) => {
  return API_VARS.baseUrl.concat('/', route)
}

export const API = {
  ROUTES,
  HEADERS
}
