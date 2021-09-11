import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Typography } from 'components/atoms/Typography'
import { Card } from 'components/organisms/Card'

const media = {
  url: 'media.jpg'
}

describe('<Card /> component render tests', () => {
  test('should render <Card /> component and its content', () => {
    render(
      <Theme themeMode="light">
        <Card media={media} mediaTestId="card-image">
          <Typography variant="h1">Card Test</Typography>
        </Card>
      </Theme>
    )

    const cardContent = screen.getByText('Card Test')
    expect(cardContent).toBeInTheDocument()

    const cardMedia = screen.getByTestId('card-image')
    expect(cardMedia).toBeInTheDocument()
  })
})
