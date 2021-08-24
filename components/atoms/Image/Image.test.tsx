import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Image } from 'components/atoms/Image'

describe('<Image /> component render tests', () => {
  test('should render the image component', () => {
    render(
      <Theme themeMode="light">
        <Image
          src="https://avatarfiles.alphacoders.com/198/198678.png"
          alt="avatar"
          testId="default-image"
        />
      </Theme>
    )
    const defaultImage = screen.getByTestId('default-image')
    expect(defaultImage).toBeInTheDocument()
  })
})
