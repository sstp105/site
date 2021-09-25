import { API_VARS } from 'libs/config/vars'
import { NextApiRequest } from 'next'

export const isAuthorized = async (req: NextApiRequest) => {
  const { headers } = req
  const { authorization } = headers

  return authorization === API_VARS.authorization
}
