import React, { useContext, useState } from 'react'
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
import { NavigationContext } from 'context/NavigationContext'

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
  const { video } = useContext(NavigationContext)

  const [playlistIndex, setPlaylistIndex] = useState<number>(0)

  const switchVideo = (targetIndex: number) => {
    if (targetIndex === playlistIndex) {
      return
    }
    setPlaylistIndex(targetIndex)
  }

  const bannerProps: IBannerProps = {
    image: {
      url: video.banner
    },
    element: (
      <SectionHeader title={video.seo.title} subtitle={video.seo.description} />
    )
  }

  return (
    <>
      <Seo {...video.seo} />
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
            {videos.map((elem, index) => (
              <Image
                key={elem._id}
                src={elem.banner.url}
                alt={elem.banner.alt}
                variant="square"
                onClick={() => switchVideo(index)}
              />
            ))}
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
