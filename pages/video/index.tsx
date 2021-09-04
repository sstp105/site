import React, { useState, useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { Banner } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Icon } from 'components/atoms/Icon'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { Typography } from 'components/atoms/Typography'

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

  ${(props) => props.theme.media.tablet} {
    display: block;
  }
`

const StyledVideo = styled.div`
  position: relative;
  margin-bottom: 25px;
  width: 75%;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 15px;
  }

  ${(props) => props.theme.media.tablet} {
    width: 100%;
  }
`

const StyledPlaylist = styled.div`
  width: 25%;
  position: sticky;
  top: 0;
  margin-left: 40px;
  img {
    border-radius: 5px;
    margin-bottom: 20px;
  }

  ${(props) => props.theme.media.tablet} {
    width: 100%;
    margin-left: 0px;
    display: flex;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 5px;
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
    img {
      width: 200px;
      margin-right: 20px;
    }
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
  img {
    border-radius: 15px;
  }

  i {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

interface IVideoPage {
  videos: Array<IVideo>
}

// replay
// auto play (right nav)
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
