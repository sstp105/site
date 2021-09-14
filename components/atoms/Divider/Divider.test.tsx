import React from 'react'
import { renderWithTheme } from 'libs/utils/renderWithTheme'
import { Divider } from 'components/atoms/Divider'
import { screen } from '@testing-library/dom'

describe('Atoms: <Divider /> component render tests', () => {
  test('Test case 1: should render video element', () => {
    renderWithTheme(<Divider testId="default-divider" />)

    const renderedDivider = screen.getByTestId('default-divider')
    expect(renderedDivider).toBeInTheDocument()
  })
})
