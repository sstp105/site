import styled from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Timeline } from 'components/organisms/Timeline'
import experienceData from 'data/experience.json'

const Wrapper = styled.div``

export const HomeExperience: React.FC = () => {
  return (
    <Wrapper id="experience">
      <SectionHeader title="Experiences" subtitle="The Journey." />
      <Timeline data={experienceData} />
    </Wrapper>
  )
}
