import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import React from 'react'

const ServerErrorPage: React.FC = () => {
  return (
    <ErrorPageTemplate
      title="500 Server Error"
      description="We are working on fixing the problem. Please try again later"
      errorCode={500}
    />
  )
}

export default ServerErrorPage
