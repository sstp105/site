import React from 'react'
import styled, { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'

const StyledPlaylist = styled.div`
  width: 25%;
  img {
    border-radius: 5px;
    margin-bottom: 20px;
  }

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
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

export interface IPlaylistProps {
  title: string
  showAutoPlay?: boolean
  children: React.ReactNode
}

export const Playlist: React.FC<IPlaylistProps> = (props) => {
  const { title, children } = props

  return (
    <StyledPlaylist>
      <Typography
        variant="h5"
        margin={false}
        css={css`
          margin-bottom: 20px;
        `}
      >
        {title}
      </Typography>
      <VideoList>{children}</VideoList>
    </StyledPlaylist>
  )
}
