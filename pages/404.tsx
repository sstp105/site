import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import React from 'react'

const NotFoundPage: React.FC = () => {
  return (
    <ErrorPageTemplate
      title="404 Not Found"
      description="Oops! We can't seem to find the page you are looking for"
      errorCode={404}
    />
  )
}

export default NotFoundPage
