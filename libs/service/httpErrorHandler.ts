import { NextApiResponse } from 'next'

export const Unauthorized = (res: NextApiResponse) => {
  return res.status(401).json({
    code: 401,
    message: 'Unauthorized'
  })
}

export const InternalServerError = (res: NextApiResponse) => {
  return res.status(500).json({
    code: 500,
    message: 'Internal server error'
  })
}

export const MethodNotAllowed = (res: NextApiResponse) => {
  return res.status(405).json({
    code: 405,
    message: 'Method not allowed'
  })
}
