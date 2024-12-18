import path from 'path'
import fs from 'fs/promises'
import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import { ERROR_PAGE } from 'libs/constants/error'
import React from 'react'

const ServerErrorPage: React.FC = (props) => {
  return <ErrorPageTemplate {...ERROR_PAGE[500]} />
}

export async function getStaticProps() {
  const navigations = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/navigations.json'), 'utf-8'))

  return {
    props: { navigations }
  }
}


export default ServerErrorPage
