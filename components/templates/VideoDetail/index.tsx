import React, { useState, useRef, useEffect } from 'react'
import { Typography } from 'components/atoms/Typography'
import { ChipList } from 'components/organisms/ChipList'
import styled, { css } from 'styled-components'
import { IVideo } from 'types/schema/Video'
import { Album } from 'components/organisms/Album'
import { TITLE } from 'libs/constants/text'
import { Video } from 'components/molecules/Video'
import { Panel } from 'components/molecules/Panel'

export const VideoDetail: React.FC<IVideo> = (props) => {
  const {
    title,
    description,
    publishedDate,
    tags,
    banner,
    url,
    music,
    thumbsUp
  } = props

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
      <Video banner={banner} src={url} />
      <Panel />
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
