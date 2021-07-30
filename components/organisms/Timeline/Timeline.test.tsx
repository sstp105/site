import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Timeline } from 'components/organisms/Timeline'

const timelineItem = {
  title: 'Title Test',
  company: 'Company Test',
  startDate: '2021/05',
  endDate: 'Present',
  description: 'Job Description'
}

const timelineData = [timelineItem]

describe('<Timeline /> component render tests', () => {
  test('should render <Timeline /> component and its content', () => {
    render(
      <ThemeContext themeMode="light">
        <Timeline data={timelineData} />
      </ThemeContext>
    )

    const title = screen.getByText(timelineItem.title)
    expect(title).toBeInTheDocument()

    const company = screen.getByText(timelineItem.company)
    expect(company).toBeInTheDocument()

    const date = screen.queryByText(
      timelineItem.startDate + ' - ' + timelineItem.endDate
    )
    expect(date).toBeInTheDocument()

    const description = screen.getByText(timelineItem.description)
    expect(description).toBeInTheDocument()
  })
})
