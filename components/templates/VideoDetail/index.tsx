import React, { useState, useRef, useEffect } from 'react'
import { Typography } from 'components/atoms/Typography'
import { ChipList } from 'components/organisms/ChipList'
import { VideoPlayer } from 'components/organisms/VideoPlayer'
import styled, { css } from 'styled-components'
import { IVideoProps } from 'components/molecules/Video'
import { IVideo } from 'types/schema/Video'
import { Album } from 'components/organisms/Album'

const MusicContainer = styled.div`
  margin-top: 20px;
`

export const VideoDetail: React.FC<IVideo> = (props) => {
  const { title, description, publishedDate, tags, banner, url } = props

  const curVideoRef = useRef(null)
  const [showBanner, setShowBanner] = useState<boolean>(true)

  useEffect(() => {
    setShowBanner(true)
  }, [url])

  const play = () => {
    if (!curVideoRef) return

    setShowBanner(false)
    curVideoRef.current.controls = true
    curVideoRef.current.play()
  }

  const videoProps: IVideoProps = {
    showBanner: showBanner,
    onPlay: () => play(),
    banner: banner,
    src: url
  }

  return (
    <>
      <Typography
        variant="h4"
        margin={false}
        css={css`
          margin-bottom: 20px;
        `}
      >
        {title}
      </Typography>
      <Typography variant="note">{publishedDate}</Typography>
      <VideoPlayer videoProps={videoProps} ref={curVideoRef} />
      <Typography variant="body">{description}</Typography>
      <ChipList items={tags} size="small" variant="outlined" />
      <MusicContainer>
        <Typography variant="h6" margin={false}>
          音乐
        </Typography>
        <Album
          banner={{
            url: 'https://lain.bgm.tv/pic/cover/l/14/28/231883_eVji6.jpg'
          }}
          size="s"
        />
      </MusicContainer>
    </>
  )
}
