import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import { ERROR_PAGE } from 'libs/constants/error'
import React from 'react'

const ServerErrorPage: React.FC = () => {
  return <ErrorPageTemplate {...ERROR_PAGE[500]} />
}

export default ServerErrorPage
