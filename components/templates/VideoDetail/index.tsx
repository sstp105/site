import React, { useEffect, useState } from 'react'
import { Typography } from 'components/atoms/Typography'
import { ChipList } from 'components/organisms/ChipList'
import styled, { css } from 'styled-components'
import { IVideo } from 'types/schema/Video'
import { Album } from 'components/organisms/Album'
import { TITLE } from 'libs/constants/text'
import { Video } from 'components/molecules/Video'
import { Panel } from 'components/molecules/GestureBar'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { Overlay } from 'components/atoms/Overlay'

export interface IVideoEnhaance extends IVideo {
  switchTheaterMode: () => void
}

export const VideoDetail: React.FC<IVideoEnhaance> = (props) => {
  const {
    id,
    title,
    description,
    publishedDate,
    tags,
    banner,
    url,
    music,
    thumbsUp,
    switchTheaterMode
  } = props

  const [lightOn, setLightOn] = useState<boolean>(true)

  const leftIcons = [
    {
      iconName: FONTAWESOME_ICONS.download,
      onClick: () => window.open(url, '_blank')
    }
  ]

  const rightIcons = [
    {
      iconName: FONTAWESOME_ICONS.desktop,
      onClick: () => switchTheaterMode()
    },
    {
      iconName: FONTAWESOME_ICONS.bulb,
      onClick: () => setLightOn((prevState) => !prevState)
    }
  ]
  return (
    <>
      {!lightOn && (
        <Overlay
          fullSize
          css={css`
            z-index: 5 !important;
            background-color: rgba(0, 0, 0, 0.9) !important;
          `}
        />
      )}

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
      <VideoPlayer lightOn={lightOn}>
        <Video banner={banner} src={url} />
        <Panel size="xs" leftIcons={leftIcons} rightIcons={rightIcons} />
      </VideoPlayer>
      <Typography variant="body">{description}</Typography>
      <ChipList items={tags} size="small" variant="outlined" />
      <MusicContainer>
        <Typography variant="h6" margin={false}>
          {TITLE.MUSIC}
        </Typography>
        <Album {...music} size="s" />
      </MusicContainer>
    </>
  )
}

const MusicContainer = styled.div`
  margin-top: ${({ theme }) => theme.space.s};
`

const VideoPlayer = styled.div<{ lightOn: boolean }>`
  position: relative;
  z-index: ${(props) => (props.lightOn ? 0 : 6)};
`
