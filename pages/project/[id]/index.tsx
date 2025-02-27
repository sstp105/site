import React from 'react'
import styled, { css } from 'styled-components'
import { IProject } from 'types/schema/Project'
import { Typography } from 'components/atoms/Typography'
import { Divider } from 'components/atoms/Divider'
import { Breadcrumb } from 'components/molecules/Breadcrumb'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ISeo, Seo } from 'components/templates/Seo'
import { ChipList } from 'components/organisms/ChipList'
import { Carousel } from 'components/organisms/Carousel'
import { Page } from 'components/atoms/Page'
import { Flex } from 'components/atoms/Flex'
import path from 'path'
import fs from 'fs/promises'

const FeatureDetailContainer = styled.div`
  margin-left: auto;
  width: 70%;
  ${(props) => props.theme.media.tablet_sm} {
    width: 100%;
  }
`

interface IProjectDetailPageProps {
  project: IProject
}

const ProjectDetailPage: React.FC<IProjectDetailPageProps> = (props) => {
  const { project } = props
  const { title, category, description, tags, url, images, features, banner } =
    project
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
          const { title, id } = elem
          const subfeatures = elem.features
          return (
            <Flex
              key={id}
              align="flex-start"
              css={css`
                margin: ${({ theme }) => theme.space.s} 0;
              `}
            >
              <Typography variant="h4">{title}</Typography>
              <FeatureDetailContainer>
                {subfeatures.map((item) => {
                  const { title, contents, id } = item
                  return (
                    <React.Fragment key={id}>
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
  const projectList = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/projects.json'), 'utf-8'))

  const paths = projectList.map((elem) => {
    return {
      params: {
        id: elem.id
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const navigations = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/navigations.json'), 'utf-8'))
  const projectList = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/projects.json'), 'utf-8'))
  const project = projectList.find((p) => p.id === params?.id);

  if (!project) {
    return {
      notFound: true
    };
  }

  return {
    props: { project, navigations }
  };
};

export default ProjectDetailPage
