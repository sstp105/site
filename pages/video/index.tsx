import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Banner } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Icon } from 'components/atoms/Icon'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { Typography } from 'components/atoms/Typography'
import { Chip } from 'components/molecules/Chip'
import { Flex } from 'components/atoms/Layout'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px 50px 20px;
`

const MainSection = styled.div`
  width: 1240px;
  border-radius: 5px;
  color: ${(props) => props.theme.color.typography};
  display: flex;

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    display: block;
  }
`

const Left = styled.div`
  width: 75%;
  margin-bottom: 25px;
  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }
`

const Control = styled.div`
  height: auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 0 20px;
  }
  box-shadow: 0 0 8px ${(props) => props.theme.color.shadow};
`

const StyledVideo = styled.div`
  position: relative;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`

const StyledPlaylist = styled.div`
  width: 25%;
  margin-left: 40px;
  img {
    border-radius: 5px;
    margin-bottom: 20px;
  }

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
    margin-left: 0px;
  }
`

const Preview = styled.div<{ active: boolean }>`
  position: relative;
  z-index: 1;
  opacity: 1;
  transition: all 1s;
  ${(props) =>
    !props.active &&
    css`
      z-index: 0;
      opacity: 0;
    `}

  i {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const VideoList = styled.div`
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
`

interface IVideoPage {
  videos: Array<IVideo>
}

// replay
// auto play (right nav)
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

  const [showBanner, setShowBanner] = useState<boolean>(true)
  const [playlistIndex, setPlaylistIndex] = useState<number>(0)

  const curVideoRef = useRef(null)

  const play = () => {
    if (!curVideoRef) return

    setShowBanner(false)
    curVideoRef.current.controls = true
    curVideoRef.current.play()
  }

  const switchVideo = (targetIndex: number) => {
    if (targetIndex === playlistIndex) {
      return
    }

    // reset preview
    setShowBanner(true)
    setPlaylistIndex(targetIndex)
  }

  return (
    <>
      <Banner
        image={{
          url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30'
        }}
        element={
          <SectionHeader
            title="Videos"
            subtitle="AMV | MAD | Motion Graphics"
          />
        }
      />
      <Wrapper>
        <MainSection>
          <Left>
            <Typography
              variant="h4"
              margin={false}
              css={css`
                margin-bottom: 20px;
              `}
            >
              {videos[playlistIndex].title}
            </Typography>
            <Typography variant="note">2021-08-28 18:26:00</Typography>
            <StyledVideo>
              <Preview active={showBanner}>
                <Icon
                  iconName={FONTAWESOME_ICONS.play}
                  size="xxl"
                  onClick={play}
                />
                <Image
                  src={videos[playlistIndex].banner.url}
                  alt={videos[playlistIndex].banner.alt}
                  variant="square"
                />
              </Preview>
              <video
                src={videos[playlistIndex].url}
                ref={curVideoRef}
                poster={videos[playlistIndex].banner.url}
              />
            </StyledVideo>
            <Control>
              <div>
                <Icon iconName="fas fa-thumbs-up" size="xs" />
                <Icon iconName="fas fa-share-alt" size="xs" />
                <Icon iconName={FONTAWESOME_ICONS.download} size="xs" />
              </div>
              <div>
                <Icon iconName="fas fa-desktop" size="xs" />
                <Icon iconName="fas fa-lightbulb" size="xs" />
              </div>
            </Control>
            <Typography variant="body">
              http://steamworkshop.download/download/view/1807411209
              <br />
              转载自wallpaper engine的一款动态桌面壁纸 原作者名: 2825659998
              <br />
              原视频标题: 【书记舞】【4k】【60帧】【waifu2xLab图像处理】藤原千花
              <br />
              简介: 转载自wallpaper engine的一款动态桌面壁纸， 网盘链接: <br />
              https://pan.baidu.com/s/17XnGy7mzXgEnfiN0MA735A 提取码: <br />
              bgs2进行下载，不要忘了三连哦^_^
            </Typography>
            <Flex
              css={css`
                margin: 20px 0;
              `}
            >
              {videoTags.map((t: string) => (
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
          </Left>
          <StyledPlaylist>
            <Typography
              variant="h5"
              margin={false}
              css={css`
                margin-bottom: 20px;
              `}
            >
              Playlist
            </Typography>
            <VideoList>
              {videos.map((elem, index) => (
                <Image
                  key={elem._id}
                  src={elem.banner.url}
                  alt={elem.banner.alt}
                  variant="square"
                  onClick={() => switchVideo(index)}
                />
              ))}
            </VideoList>
          </StyledPlaylist>
        </MainSection>
      </Wrapper>
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
