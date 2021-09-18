import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { API } from 'libs/config/api'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Flex } from 'components/atoms/Flex'
import { Playlist } from 'components/molecules/Playlist'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { VideoDetail } from 'components/templates/VideoDetail'
import { Seo } from 'components/templates/Seo'
import { INavigation } from 'types/schema/Navigation'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { VARS } from 'libs/config/vars'
import { ErrorPageTemplate } from 'components/templates/ErrorPage'
import { ERROR_PAGE } from 'libs/constants/error'

const Left = styled.div`
  width: 75%;
  margin-right: ${({ theme }) => theme.space.l};
  ${(props) => props.theme.media.desktop_sm} {
    order: 1;
    width: 100%;
    margin: ${({ theme }) => theme.space.s} 0;
  }
`

interface IVideoPage {
  videos: Array<IVideo>
  navigation: INavigation
}

const VideoPage: React.FC<IVideoPage> = (props) => {
  const { videos, navigation } = props
  const { seo, banner } = navigation

  const [playlistIndex, setPlaylistIndex] = useState<number>(0)

  const switchVideo = (targetIndex: number) => {
    if (targetIndex !== playlistIndex) {
      setPlaylistIndex(targetIndex)
    }
  }

  const bannerProps = {
    image: banner.image,
    element: <SectionHeader title={banner.title} subtitle={banner.subtitle} />
  }

  if (VARS.isProd) {
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
          css={css`
            margin: 0 ${({ theme }) => theme.space.s};
          `}
        >
          <Left>
            <VideoDetail {...videos[playlistIndex]} />
          </Left>
          <Playlist title="Playlist">
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
          </Playlist>
        </Flex>
      </BannerPageTemplate>
    </>
  )
}

export async function getStaticProps() {
  const [videoData, pageData] = await Promise.all([
    fetch(`${API.baseUrl}/video`, API.headers).then((res) => res.json()),
    fetch(`${API.baseUrl}/navigation/video`, API.headers).then((res) =>
      res.json()
    )
  ])

  const videos: Array<IVideo> = videoData.data
  const navigation: INavigation = pageData.data

  if (!videos) {
    return {
      notFound: true
    }
  }

  return {
    props: { videos, navigation }
  }
}

export default VideoPage
