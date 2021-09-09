import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Flex } from 'components/atoms/Flex'
import { Playlist } from 'components/molecules/Playlist'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { VideoDetail } from 'components/templates/VideoDetail'
import { Seo } from 'components/templates/Seo'
import { NAVIGATION } from 'libs/constants/navigation'

const Left = styled.div`
  width: 75%;
  margin-right: 40px;
  ${(props) => props.theme.media.desktop_sm} {
    order: 1;
    width: 100%;
    margin-right: 0;
    margin-top: 25px;
  }
`

interface IVideoPage {
  videos: Array<IVideo>
}

const VideoPage: React.FC<IVideoPage> = (props) => {
  const { videos } = props
  const { seo, banner } = NAVIGATION.video

  const [playlistIndex, setPlaylistIndex] = useState<number>(0)

  const switchVideo = (targetIndex: number) => {
    if (targetIndex !== playlistIndex) {
      setPlaylistIndex(targetIndex)
    }
  }

  const bannerProps: IBannerProps = {
    image: {
      url: banner
    },
    element: <SectionHeader title={seo.title} subtitle={seo.description} />
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
            margin: 0 20px;
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
  const [videoData] = await Promise.all([
    fetch(`${API.baseUrl}/video`, API.headers).then((res) => res.json())
  ])

  const videos: Array<IVideo> = videoData.data

  if (!videos) {
    return {
      notFound: true
    }
  }

  return {
    props: { videos }
  }
}

export default VideoPage
