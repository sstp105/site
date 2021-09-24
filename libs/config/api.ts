import { API_VARS } from './vars'

const HEADERS = {
  headers: {
    Authorization: process.env.AUTHORIZATION_TOKEN,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const ROUTES = (route: string) => {
  return API_VARS.baseUrl.concat('/', route)
}

export const API = {
  ROUTES,
  HEADERS
}
