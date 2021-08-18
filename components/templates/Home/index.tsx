import styled from 'styled-components'
import React from 'react'
import { Spacer } from 'components/atoms/Spacer'
import { HomeAbout } from 'components/templates/Home/HomeAbout'
import { HomeSkill } from 'components/templates/Home/HomeSkill'
import { HomeExperience } from 'components/templates/Home/HomeExperience'
import { HomePortfolio } from 'components/templates/Home/HomePortfolio'
import { HomeBlog } from 'components/templates/Home/HomeBlog'
import { HomeContact } from 'components/templates/Home/HomeContact'

export const components = [
  {
    id: 'about',
    component: <HomeAbout />
  },
  {
    id: 'skill',
    component: <HomeSkill />
  },
  {
    id: 'experience',
    component: <HomeExperience />
  },
  {
    id: 'portfolio',
    component: <HomePortfolio />
  },
  {
    id: 'blog',
    component: <HomeBlog />
  },
  {
    id: 'contact',
    component: <HomeContact />
  }
]

const StyledWrapper = styled.div`
  position: relative;
`
export const homeComponents: Array<JSX.Element> = Object.keys(components).map(
  (key) => {
    const { id, component } = components[key]

    return (
      <React.Fragment key={id}>
        <StyledWrapper id={id}>{component}</StyledWrapper>
        <Spacer verticalSpace="200px" />
      </React.Fragment>
    )
  }
)
