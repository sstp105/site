import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Typography } from 'components/atoms/Typography'
import { Card } from 'components/organisms/Card'
import { CONSTANT } from 'libs/utils/constant'

const media = CONSTANT.TESTING.image

describe('<Card /> component render tests', () => {
  test('should render <Card /> component and its content', () => {
    render(
      <ThemeContext themeMode="light">
        <Card media={media} mediaTestId="card-image">
          <Typography variant="h1">Card Test</Typography>
        </Card>
      </ThemeContext>
    )

    const cardContent = screen.getByText('Card Test')
    expect(cardContent).toBeInTheDocument()

    const cardMedia = screen.getByTestId('card-image')
    expect(cardMedia).toBeInTheDocument()
  })
})
