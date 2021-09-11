import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Article } from '.'

const TESTCASE_1 = {
  h1: 'Heading one element',
  p: 'Paragraph element'
}

describe('Organisms: <Article /> component render tests', () => {
  test('Test case 1: should render Article html contents correctly', () => {
    const reducer = (prev: string, cur: string) => {
      const openTag = `<${cur}>`,
        closeTag = `</${cur}>`
      const curElem = openTag.concat(TESTCASE_1[cur], closeTag)
      return prev.concat(curElem)
    }
    const html = Object.keys(TESTCASE_1).reduce(reducer, '')

    render(
      <Theme themeMode="light">
        <Article article={html} />
      </Theme>
    )

    Object.keys(TESTCASE_1).forEach((elem) => {
      const renderedElem = screen.getByText(TESTCASE_1[elem])
      expect(renderedElem).toBeInTheDocument()
    })
  })
})
