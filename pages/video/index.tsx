import React, { useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Banner } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  ${(props) => props.theme.media.desktop_sm} {
    display: block;
  }
`

const MainSection = styled.div`
  width: 1440px;
  border-radius: 5px;
  color: ${(props) => props.theme.color.typography};
  margin: 50px 0;
  margin-right: 20px;
  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }
  display: flex;
`

const StyledVideo = styled.div<{ active: boolean }>`
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 55vw;
    opacity: 1;
    border-radius: 15px;
    z-index: 1;
    transition: all 0.5s;

    ${(props) =>
      !props.active &&
      css`
        opacity: 0;
        z-index: 0;
      `}
  }
  video {
    width: 55vw;
    border-radius: 15px;
  }
`

const StyledPlaylist = styled.div`
  /* background-color: red; */
  width: 350px;
  margin-left: 40px;

  img {
    border-radius: 5px;
    margin-bottom: 20px;
  }
`

interface IVideoPage {
  videos: Array<IVideo>
}

// 剧场模式 关灯模式
// replay
// auto play
// Play icon
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
          <StyledVideo active={showBanner}>
            <Image
              src={videos[playlistIndex].banner.url}
              alt=""
              variant="square"
              onClick={play}
            />
            <video src={videos[playlistIndex].url} ref={curVideoRef} />
          </StyledVideo>
          <StyledPlaylist>
            {videos.map((elem, index) => (
              <Image
                key={elem._id}
                src={elem.banner.url}
                alt={elem.banner.alt}
                variant="square"
                onClick={() => switchVideo(index)}
              />
            ))}
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
