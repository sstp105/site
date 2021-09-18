import React from 'react'
import styled, { css } from 'styled-components'
import { API } from 'libs/config/api'
import { IProject, IProjectBase } from 'types/schema/Project'
import { Typography } from 'components/atoms/Typography'
import { Divider } from 'components/atoms/Divider'
import { Breadcrumb } from 'components/molecules/Breadcrumb'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ISeo, Seo } from 'components/templates/Seo'
import { ChipList } from 'components/organisms/ChipList'
import { Carousel } from 'components/organisms/Carousel'
import { Page } from 'components/atoms/Page'
import { Flex } from 'components/atoms/Flex'

const FeatureDetailContainer = styled.div`
  margin-left: auto;
  width: 70%;
  ${(props) => props.theme.media.tablet_sm} {
    width: 100%;
  }
`

const ProjectDetailPage: React.FC<IProject> = (props) => {
  const { title, category, description, tags, url, images, features, banner } =
    props
  const previews = [banner, ...images]

  const seoProps: ISeo = {
    title: title,
    description: description
  }
  return (
    <>
      <Seo {...seoProps} />
      <Page
        width="desktop_sm"
        css={css`
          margin-top: 100px;
          padding: 0 20px;
        `}
      >
        <Breadcrumb />
        <Typography variant="h3">{title}</Typography>
        <Typography variant="caption">{category}</Typography>
        <Typography>{description}</Typography>
        <ChipList items={tags} variant="outlined" size="small" />
        <Carousel images={previews} />

        <Divider />

        {features.map((elem) => {
          const { title, _id } = elem
          const subfeatures = elem.features
          return (
            <Flex
              key={_id}
              align="flex-start"
              css={css`
                margin: ${({ theme }) => theme.space.s} 0;
              `}
            >
              <Typography variant="h4">{title}</Typography>
              <FeatureDetailContainer>
                {subfeatures.map((item) => {
                  const { title, contents, _id } = item
                  return (
                    <React.Fragment key={_id}>
                      <Typography variant="h5">{title}</Typography>
                      {contents.map((c) => (
                        <Typography key={c}>{c}</Typography>
                      ))}
                    </React.Fragment>
                  )
                })}
              </FeatureDetailContainer>
            </Flex>
          )
        })}
      </Page>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const [projectListData] = await Promise.all([
    fetch(`${API.baseUrl}/project`, API.headers).then((res) => res.json())
  ])

  const projectList: Array<IProjectBase> = projectListData.data
  const paths = projectList.map((elem) => {
    return {
      params: {
        id: elem._id
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  const [projectData] = await Promise.all([
    fetch(`${API.baseUrl}/project/${params.id}`, API.headers).then((res) =>
      res.json()
    )
  ])

  const project: IProject = projectData.data

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: project
  }
}

export default ProjectDetailPage
