import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Flex } from 'components/atoms/Layout'

describe('<Flex /> component render tests', () => {
  test('should render the flex container and children elements', () => {
    render(
      <ThemeContext themeMode="light">
        <Flex testId="default-flex">
          <h1>Flex Container Test</h1>
        </Flex>
      </ThemeContext>
    )

    const flexContainer = screen.getByTestId('default-flex')
    const childrenElement = screen.getByText('Flex Container Test')

    expect(flexContainer).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
  })
})
