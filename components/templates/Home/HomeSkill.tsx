import React, { useContext } from 'react'
import styled from 'styled-components'
import { ProfileContext } from 'context/ProfileContext'
import { Image } from 'components/atoms/Image'
import { Typography } from 'components/atoms/Typography'
import { Paper } from 'components/atoms/Paper'
import { SectionHeader } from 'components/molecules/SectionHeader'

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const HomeSkill: React.FC = () => {
  const { skills } = useContext(ProfileContext).profile

  const skillList = skills.map((elem) => (
    <Paper key={elem._id}>
      <Image
        src={elem.image.url}
        alt={elem.image.alt}
        width="70px"
        height="70px"
        variant="square"
      />
      <Typography variant="h6">{elem.title}</Typography>
      <Typography variant="body" align="center" margin={false}>
        {elem.content}
      </Typography>
    </Paper>
  ))

  return (
    <>
      <SectionHeader title="Skills" subtitle="Always Learning." />
      <StyledWrapper>{skillList}</StyledWrapper>
    </>
  )
}
