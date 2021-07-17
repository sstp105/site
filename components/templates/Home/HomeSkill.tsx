import styled from 'styled-components'
import { Image } from 'components/atoms/Image'
import { Typography } from 'components/atoms/Typography'
import { Paper } from 'components/molecules/Paper'
import { SectionHeader } from 'components/molecules/SectionHeader'
import skillData from 'data/skill.json'

const Wrapper = styled.div`
  border: 1px solid purple;
  margin: 0 auto;
  max-width: 1440px;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const skillList = skillData.map((elem) => (
  <Paper key={elem.title}>
    <Image src={elem.imgUrl} alt={elem.alt} width="70px" height="70px" />
    <Typography variant="h5">{elem.title}</Typography>
    <Typography variant="body" align="center">
      {elem.subtitle}
    </Typography>
  </Paper>
))

export const HomeSkill: React.FC = () => {
  return (
    <Wrapper id="skills">
      <SectionHeader title="Skills" subtitle="Always Learning." />
      <StyledWrapper>{skillList}</StyledWrapper>
    </Wrapper>
  )
}
