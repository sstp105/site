import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Flex } from 'components/atoms/Layout'

describe('<Flex /> component render tests', () => {
  test('should render the flex container and children elements', () => {
    render(
      <Theme themeMode="light">
        <Flex testId="default-flex">
          <h1>Flex Container Test</h1>
        </Flex>
      </Theme>
    )

    const flexContainer = screen.getByTestId('default-flex')
    const childrenElement = screen.getByText('Flex Container Test')

    expect(flexContainer).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
  })
})
