import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { API } from 'libs/config/api'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Flex } from 'components/atoms/Flex'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { VideoDetail } from 'components/templates/VideoDetail'
import { Seo } from 'components/templates/Seo'
import { INavigation } from 'types/schema/Navigation'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import { ERROR_PAGE } from 'libs/constants/error'
import { Typography } from 'components/atoms/Typography'
import { isProd } from 'libs/config/vars'

const Left = styled.div<{ theaterMode: boolean }>`
  width: 75%;
  margin-right: ${({ theme }) => theme.space.l};
  ${(props) => props.theme.media.desktop_sm} {
    order: 1;
    width: 100%;
    margin: ${({ theme }) => theme.space.s} 0;
  }

  ${(props) =>
    props.theaterMode &&
    css`
      order: 1;
      width: 100%;
      margin: ${({ theme }) => theme.space.s} 0;
    `}
`

const Right = styled.div<{ theaterMode: boolean }>`
  width: 25%;
  img {
    border-radius: 5px;
    margin-bottom: 20px;
  }

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }

  ${(props) =>
    props.theaterMode &&
    css`
      width: 100%;
    `}
`

const VideoList = styled.div<{ theaterMode: boolean }>`
  max-height: 600px;
  overflow-y: scroll;
  border-radius: 5px;
  padding: 20px 20px 0 20px;
  box-shadow: 0 0 8px ${(props) => props.theme.color.shadow};
  ::-webkit-scrollbar {
    height: 5px;
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${(props) => props.theme.media.desktop_sm} {
    display: flex;
    overflow-x: scroll;

    img {
      width: 200px;
      margin-right: 20px;
    }
  }

  ${(props) =>
    props.theaterMode &&
    css`
      display: flex;
      overflow-x: scroll;

      img {
        width: 200px;
        margin-right: 20px;
      }
    `}
`

interface IVideoPage {
  videos: Array<IVideo>
  navigation: INavigation
}

const VideoPage: React.FC<IVideoPage> = (props) => {
  const { videos, navigation } = props
  const { seo, banner } = navigation

  const [playlistIndex, setPlaylistIndex] = useState<number>(0)
  const [theaterModeOn, setTheaterModeOn] = useState<boolean>(false)

  const switchVideo = (targetIndex: number) => {
    if (targetIndex !== playlistIndex) {
      setPlaylistIndex(targetIndex)
    }
  }

  const switchTheaterMode = () => {
    setTheaterModeOn((prevState) => !prevState)
  }

  const bannerProps = {
    image: banner.image,
    element: <SectionHeader title={banner.title} subtitle={banner.subtitle} />
  }

  if (isProd) {
    return <ErrorPageTemplate {...ERROR_PAGE[204]} />
  }

  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={bannerProps}>
        <Flex
          autoWrap={false}
          align="flex-start"
          breakPoint="desktop_sm"
          direction={theaterModeOn ? 'column' : 'row'}
          css={css`
            margin: 0 ${({ theme }) => theme.space.s};
          `}
        >
          <Left theaterMode={theaterModeOn}>
            <VideoDetail
              {...videos[playlistIndex]}
              switchTheaterMode={switchTheaterMode}
            />
          </Left>
          <Right theaterMode={theaterModeOn}>
            <Typography
              variant="h5"
              margin={false}
              css={css`
                margin-bottom: 20px;
              `}
            >
              Playlist
            </Typography>
            <VideoList theaterMode={theaterModeOn}>
              {videos.map((elem, index) => {
                const { _id, banner } = elem
                return (
                  <Image
                    key={_id}
                    src={banner.url}
                    alt={banner.alt}
                    variant="square"
                    onClick={() => switchVideo(index)}
                  />
                )
              })}
            </VideoList>
          </Right>
        </Flex>
      </BannerPageTemplate>
    </>
  )
}

export async function getStaticProps() {
  const [videos, navigation] = await Promise.all([
    fetch(API.ROUTES('video'), API.HEADERS).then((res) => res.json()),
    fetch(API.ROUTES('navigation/video'), API.HEADERS).then((res) => res.json())
  ])

  if (!videos || !navigation) {
    return {
      notFound: true
    }
  }

  return {
    props: { videos: videos.data, navigation: navigation.data }
  }
}

export default VideoPage
