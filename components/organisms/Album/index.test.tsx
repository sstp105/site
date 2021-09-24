import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Album, IAlbumProps } from 'components/organisms/Album'

export const TESTCASE_1: IAlbumProps = {
  cover: {
    url: 'album-banner.jpg',
    alt: 'Album banner'
  },
  title: 'Sincerely',
  artist: '茅原実里'
}

describe('Organisms: <Album /> component render tests', () => {
  test('Test case 1: should render Album title, artist, and banner', () => {
    render(
      <Theme themeMode="light">
        <Album {...TESTCASE_1} />
      </Theme>
    )

    const albumInfo = TESTCASE_1.title.concat(' - ', TESTCASE_1.artist)
    const renderedAlbumInfo = screen.getByText(albumInfo)
    expect(renderedAlbumInfo).toBeInTheDocument()

    const renderedAlbumBanner = screen.getByAltText(TESTCASE_1.cover.alt)
    expect(renderedAlbumBanner).toBeInTheDocument()
  })

  test('Test case 2: should render Album cover frame image', () => {
    render(
      <Theme themeMode="light">
        <Album {...TESTCASE_1} />
      </Theme>
    )

    const renderedAlbumFrame = screen.getByAltText('Album cover')
    expect(renderedAlbumFrame).toBeInTheDocument()
  })
})
