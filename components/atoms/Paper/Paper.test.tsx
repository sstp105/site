import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Paper } from 'components/atoms/Paper'
import { Typography } from 'components/atoms/Typography'

describe('<Paper /> component render tests', () => {
  test('should render the Paper surface component and its content', () => {
    render(
      <ThemeContext themeMode="light">
        <Paper testId="default-paper">
          <Typography testId="paper-children" variant="h1">
            Default Paper Surface
          </Typography>
        </Paper>
      </ThemeContext>
    )

    const paper = screen.getByTestId('default-paper')
    const children = screen.getByTestId('paper-children')

    expect(paper).toBeInTheDocument()
    expect(children).toBeInTheDocument()
  })
})
