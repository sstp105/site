import { useContext } from 'react'
import { ProfileContext } from 'context/ProfileContext'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Timeline } from 'components/organisms/Timeline'

export const HomeExperience: React.FC = () => {
  const { experiences } = useContext(ProfileContext)

  return (
    <>
      <SectionHeader title="Experiences" subtitle="The Journey." />
      <Timeline data={experiences} />
    </>
  )
}
