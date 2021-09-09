import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import { ERROR_PAGE } from 'libs/constants/error'
import React from 'react'

const NotFoundPage: React.FC = () => {
  return <ErrorPageTemplate {...ERROR_PAGE[404]} />
}

export default NotFoundPage
