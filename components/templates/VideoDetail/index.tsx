import React, { useState, useRef, useEffect } from 'react'
import { Typography } from 'components/atoms/Typography'
import { ChipList } from 'components/organisms/ChipList'
import { VideoPlayer } from 'components/organisms/VideoPlayer'
import styled, { css } from 'styled-components'
import { IVideoProps } from 'components/molecules/Video'
import { IVideo } from 'types/schema/Video'
import { Image } from 'components/atoms/Image'
import { Divider } from 'components/atoms/Divider'

const MusicContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`

const MusicBanner = styled.div`
  position: absolute;
  top: 20px;
  left: 2px;
  img {
    border-radius: 5px;
  }
`

const Subject = styled.div`
  img {
    border-radius: 5px;
  }
`

const Demo = styled.div`
  /* background-color: ${(props) => props.theme.color.surface}; */
  box-shadow: 0 0 8px ${(props) => props.theme.color.shadow};
  padding: 20px;
  border-radius: 10px;
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
      <div>
        <Typography variant="h6">关联条目</Typography>
        <Subject>
          <Image
            src="https://lain.bgm.tv/pic/cover/l/48/9d/1424_q8FMQ.jpg"
            alt=""
            width="125"
            variant="square"
          />
          <Typography margin={true}>K-ON 轻音少女</Typography>
        </Subject>

        <Typography variant="h6" margin={false}>
          音乐
        </Typography>
        <MusicContainer>
          <Image
            src="images/music_frame.png"
            alt=""
            width="100%"
            height="100%"
            variant="square"
          />
          <MusicBanner>
            <Image
              src="https://i1.sndcdn.com/artworks-000037227702-kv2iqq-t500x500.jpg"
              alt=""
              width="165"
              height="165"
              variant="square"
            />
          </MusicBanner>
        </MusicContainer>
      </div>
    </>
  )
}
