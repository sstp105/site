import React, { useEffect } from 'react'
import styled from 'styled-components'
import { API } from 'libs/config/vars'
import { IBlog } from 'types/schema/Blog'
import { markdown_style } from 'styles/markdown'
import hljs from 'highlight.js'

const Container = styled.article`
  max-width: 800px;
  padding-top: 75px;
  margin: 50px auto;

  padding-left: 20px;
  padding-right: 20px;
  ${markdown_style}
`

const BlogDetailPage: React.FC<IBlog> = (props) => {
  const { preview } = props

  useEffect(() => {
    hljs.initHighlightingOnLoad()
  }, [])

  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: `${preview}` }} />
    </Container>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const [blogData] = await Promise.all([
    fetch(`${API.baseUrl}/blog/${params.id}`, API.headers).then((res) =>
      res.json()
    )
  ])

  const blog: IBlog = blogData.data

  if (!blog) {
    return {
      notFound: true
    }
  }

  return {
    props: blog
  }
}

export default BlogDetailPage
