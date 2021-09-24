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
import { useThumbsUp } from 'libs/hooks/useThumbsUp'

export interface IVideoEnhaance extends IVideo {
  switchTheaterMode: () => void
}

export const VideoDetail: React.FC<IVideoEnhaance> = (props) => {
  const {
    _id,
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
  const { hasVoted, toggleVote, curThumbsUp } = useThumbsUp(
    title,
    _id,
    thumbsUp
  )

  const leftIcons = [
    {
      iconName: hasVoted[title]
        ? FONTAWESOME_ICONS.thumbsUp
        : FONTAWESOME_ICONS.thumbsUpStroke,
      text: curThumbsUp[title],
      onClick: () => toggleVote()
    },
    {
      iconName: FONTAWESOME_ICONS.share
    },
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
      <Video banner={banner} src={url} />
      <Panel size="xs" leftIcons={leftIcons} rightIcons={rightIcons} />
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
