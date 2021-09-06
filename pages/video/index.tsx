import React, { useContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Flex } from 'components/atoms/Layout/Flex'
import { Playlist } from 'components/molecules/Playlist'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { VideoDetail } from 'components/templates/VideoDetail'
import { Seo } from 'components/templates/shared/Seo'
import { NavigationContext } from 'context/NavigationContext'

const Left = styled.div`
  width: 75%;
  margin-right: 40px;
  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    margin-right: 0;
  }
`

interface IVideoPage {
  videos: Array<IVideo>
}

const videoTags = [
  '4K',
  '动画综合',
  '动漫',
  '60FPS',
  '辉夜大小姐想让我告白',
  '藤原千花',
  '书记舞'
]

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

  const videoProps = {
    title: videos[playlistIndex].title,
    publishedDate: '2021-08-28 18:26:00',
    tags: videoTags,
    banner: videos[playlistIndex].banner,
    url: videos[playlistIndex].url,
    description: `
      http://steamworkshop.download/download/view/1807411209
      转载自wallpaper engine的一款动态桌面壁纸 原作者名: 2825659998
      原视频标题: 【书记舞】【4k】【60帧】【waifu2xLab图像处理】藤原千花
      简介: 转载自wallpaper engine的一款动态桌面壁纸， 网盘链接: <br />
      https://pan.baidu.com/s/17XnGy7mzXgEnfiN0MA735A 提取码: <br />
      bgs2进行下载，不要忘了三连哦^_^
    `
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
            <VideoDetail {...videoProps} />
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
