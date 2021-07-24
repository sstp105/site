import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Image } from 'components/atoms/Image'

describe('<Image /> component render tests', () => {
  test('should render the image component', () => {
    render(
      <ThemeContext themeMode="light">
        <Image
          src="https://avatarfiles.alphacoders.com/198/198678.png"
          alt="avatar"
          testId="default-image"
        />
      </ThemeContext>
    )
    const defaultImage = screen.getByTestId('default-image')
    expect(defaultImage).toBeInTheDocument()
  })
})
