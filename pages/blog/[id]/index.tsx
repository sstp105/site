import React, { useEffect } from 'react'
import styled from 'styled-components'
import { API } from 'libs/config/vars'
import { IBlog } from 'types/schema/Blog'
import { markdown_style } from 'styles/markdown'
import hljs from 'highlight.js'
import { Banner } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'

const Container = styled.article`
  max-width: 800px;
  margin: 50px auto;

  padding-left: 20px;
  padding-right: 20px;
  ${markdown_style}
`

const BlogDetailPage: React.FC<IBlog> = (props) => {
  const { preview, title, banner } = props

  useEffect(() => {
    hljs.initHighlightingOnLoad()
  }, [])

  return (
    <>
      <Banner
        image={{
          url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/friend_2.jpg?alt=media&token=4605a0dd-f5b1-47ed-915a-8ce2f7eb4c20'
        }}
        element={<SectionHeader title={title} subtitle="Sharing My Thoughts" />}
      />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: `${preview}` }} />
      </Container>
    </>
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
