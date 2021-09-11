import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { PortfolioCard } from 'components/templates/PortfolioCard'
import { TESTCASE_1 } from 'components/templates/PortfolioCard/__mock__'

describe('Templates: <PortfolioCard /> component render tests', () => {
  test('Test case 1: should render the PortfolioCard content', () => {
    render(
      <Theme themeMode="light">
        <PortfolioCard {...TESTCASE_1} />
      </Theme>
    )

    const title = screen.getByText(TESTCASE_1.title)
    expect(title).toBeInTheDocument()

    const description = screen.getByText(TESTCASE_1.description.concat('...'))
    expect(description).toBeInTheDocument()

    const info = screen.getByText(TESTCASE_1.info[0].content)
    expect(info).toBeInTheDocument()
  })
})
