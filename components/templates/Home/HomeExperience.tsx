import styled from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Timeline } from 'components/organisms/Timeline'
import experienceData from 'data/experience.json'

export const HomeExperience: React.FC = () => {
  return (
    <>
      <SectionHeader title="Experiences" subtitle="The Journey." />
      <Timeline data={experienceData} />
    </>
  )
}
