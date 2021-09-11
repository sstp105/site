import React from 'react'
import { renderWithTheme } from 'libs/utils/renderWithTheme'
import { VideoPlayer } from '.'
import { IVideoProps } from 'components/molecules/Video'

describe('Organisms: <VideoPlayer /> component render tests', () => {
  test('Test case 1: should render video element', () => {
    const videoPlayerProps: IVideoProps = {
      showBanner: true,
      onPlay: () => {},
      banner: {
        url: 'video-banner.jpg'
      },
      src: 'http://localhost/video-url.com'
    }

    renderWithTheme(<VideoPlayer videoProps={videoPlayerProps} />)

    const renderedVideo = document.querySelector('video')
    expect(renderedVideo.src).toEqual(videoPlayerProps.src)
  })
})
