import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Timeline } from 'components/organisms/Timeline'
import { IExperience } from 'types/schema/Profile'

const timelineItem: IExperience = {
  id: 'ObjectId',
  title: 'SDE',
  company: {
    name: 'Company name',
    logo: {
      url: '',
      alt: ''
    },
    location: 'Vancouver'
  },
  description: 'Some job description',
  startDate: '2020-05',
  endDate: 'present'
}

const timelineData = [timelineItem]

describe('<Timeline /> component render tests', () => {
  test('should render <Timeline /> component and its content', () => {
    render(
      <Theme themeMode="light">
        <Timeline data={timelineData} />
      </Theme>
    )

    const title = screen.getByText(timelineItem.title)
    expect(title).toBeInTheDocument()

    const company = screen.getByText(timelineItem.company.name)
    expect(company).toBeInTheDocument()

    const date = screen.queryByText(
      timelineItem.startDate + ' - ' + timelineItem.endDate
    )
    expect(date).toBeInTheDocument()

    const description = screen.getByText(timelineItem.description)
    expect(description).toBeInTheDocument()
  })
})
