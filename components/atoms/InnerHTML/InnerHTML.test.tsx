import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'libs/utils/renderWithTheme'
import { InnerHTML } from 'components/atoms/InnerHTML'

const TESTCASE_1 = [
  {
    tag: 'h1',
    content: 'Welcome to my blog'
  },
  {
    tag: 'p',
    content: 'Paragraph 1'
  },
  {
    tag: 'p',
    content: 'Paragraph 2'
  },
  {
    tag: 'h2',
    content: 'Subsection title'
  }
]

describe('Atoms: <InnerHTML /> component render tests', () => {
  test('Test case 1: should render html content correctly', () => {
    const reducer = (prev: any, cur: any) => {
      const openTag = `<${cur.tag}>`,
        closeTag = `</${cur.tag}>`
      const curElem = openTag.concat(cur.content, closeTag)
      return prev.concat(curElem)
    }
    const html = TESTCASE_1.reduce(reducer, '')

    renderWithTheme(<InnerHTML html={html} />)

    TESTCASE_1.forEach((elem) => {
      const renderedElem = screen.getByText(elem.content)
      expect(renderedElem).toBeInTheDocument()
    })
  })
})
