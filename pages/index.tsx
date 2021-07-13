import { Seo } from 'components/molecules/Seo'
import { Header } from 'components/templates/shared/Header'
import { HomeIntro } from 'components/templates/Home/HomeIntro'
import { HomeAbout } from 'components/templates/Home/HomeAbout'

const Home: React.FC = () => {
  return (
    <div>
      <Seo />
      <Header />
      <HomeIntro />
      <HomeAbout />
    </div>
  )
}

export default Home
