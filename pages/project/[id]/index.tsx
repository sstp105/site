import React, { useRef, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { API } from 'libs/config/vars'
import { IProject, IProjectBase } from 'types/schema/Project'
import { Image } from 'components/atoms/Image'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'components/atoms/Flex'
import { Divider } from 'components/atoms/Divider'
import { Breadcrumb } from 'components/molecules/Breadcrumb'
import { GetStaticPaths, GetStaticProps } from 'next'

const Container = styled.article`
  /* max-width: 800px; */
  margin: 75px auto;
  max-width: 1140px;
  padding-left: 20px;
  padding-right: 20px;
`

const Slider = styled.div`
  margin: 20px 0;
  height: 550px;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .active {
    opacity: 1;
  }
  .slide {
    opacity: 0;
  }
`

const Previews = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  overflow-x: scroll;
  border-radius: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }

  img {
    width: auto;
    height: 100%;
    margin-right: 15px;
    border-radius: 10px;
  }
  .active {
    opacity: 1;
  }
  .slide {
    opacity: 0.5;
  }
`

const TextContainer = styled.div`
  display: flex;
  margin: 20px 0;
`

const SubTextContainer = styled.div`
  margin-left: auto;
  width: 70%;
`

const ProjectDetailPage: React.FC<IProject> = (props) => {
  const { title, category, description, tags, url, images, features, banner } =
    props
  const previews = [banner, ...images]
  const [curSlideIndex, setCurSlideIndex] = useState<number>(0)
  const indexRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!indexRef.current) return

    indexRef.current.focus()
  }, [])

  const handleArrowKeyNavigation = (keyPressed: KeyboardEvent) => {
    const { key } = keyPressed
    if (!indexRef.current) {
      return
    }

    if (key === 'ArrowLeft' && curSlideIndex > 0) {
      setCurSlideIndex((prevIndex) => prevIndex - 1)
    } else if (key === 'ArrowRight' && curSlideIndex < previews.length - 1) {
      setCurSlideIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <div>
      <Container>
        <Breadcrumb />
        <Typography variant="h3">{title}</Typography>
        <Typography variant="caption">{category}</Typography>
        <Typography>{description}</Typography>

        <Flex>
          {tags.map((t: string) => (
            <Chip
              key={t}
              label={t}
              variant="outlined"
              size="small"
              css={css`
                margin-right: 10px;
                margin-bottom: 10px;
              `}
            />
          ))}
        </Flex>
        <Slider>
          {previews.map((elem, index) => (
            <Image
              key={elem._id}
              className={index === curSlideIndex ? 'active' : 'slide'}
              src={elem.url}
              alt=""
              variant="square"
            />
          ))}
        </Slider>
        <Previews
          ref={indexRef}
          onKeyDown={handleArrowKeyNavigation as any}
          tabIndex={curSlideIndex}
        >
          {previews.map((elem, index) => (
            <Image
              onClick={() => setCurSlideIndex(index)}
              key={elem._id}
              className={index === curSlideIndex ? 'active' : 'slide'}
              src={elem.url}
              alt=""
              variant="square"
            />
          ))}
        </Previews>
        <Divider />
        {features.map((elem) => {
          const { title, previews, _id } = elem
          const subfeatures = elem.features
          return (
            <TextContainer key={_id}>
              <Typography variant="h4">{title}</Typography>
              <SubTextContainer>
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
              </SubTextContainer>
            </TextContainer>
          )
        })}
      </Container>
    </div>
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
