import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { ChipList } from 'components/organisms/ChipList'

describe('Organisms: <ChipList /> component render tests', () => {
  test('Test case 1: should render correct number of Chips', () => {
    const tags = ['React', 'Typescript', 'Sass', 'Styled Components']

    render(
      <Theme themeMode="light">
        <ChipList items={tags} itemTestId="chip-item" />
      </Theme>
    )

    const renderedChips = screen.getAllByTestId('chip-item')
    expect(renderedChips.length).toEqual(tags.length)
  })
})
