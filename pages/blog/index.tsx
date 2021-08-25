import React from 'react'
import styled from 'styled-components'
import { Banner } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IBlogBase } from 'types/schema/Blog'

const MainSection = styled.div`
  width: 710px;
  height: 1000px;
  border-radius: 5px;
  color: ${(props) => props.theme.color.typography};
  background-color: ${(props) => props.theme.color.surface};
  margin: 50px 0;
  margin-right: 20px;
  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }
`
const SideSection = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 5px;
  color: ${(props) => props.theme.color.typography};
  background-color: ${(props) => props.theme.color.surface};
  margin: 50px 0;
  ${(props) => props.theme.media.desktop_sm} {
    display: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  ${(props) => props.theme.media.desktop_sm} {
    display: block;
  }
`

const Blog: React.FC = (props) => {
  console.log(props)

  return (
    <>
      <Banner
        element={<SectionHeader title="Blog" subtitle="Sharing My Thoughts" />}
      />
      <Wrapper>
        <MainSection>Lorem</MainSection>
        <SideSection>Side bar</SideSection>
      </Wrapper>
    </>
  )
}

export async function getStaticProps() {
  const [blogData] = await Promise.all([
    fetch(`${API.baseUrl}/blog`, API.headers).then((res) => res.json())
  ])

  const blogs: Array<IBlogBase> = blogData.data

  if (!blogs) {
    return {
      notFound: true
    }
  }

  return {
    props: { blogs }
  }
}

export default Blog
