import { Seo } from 'components/molecules/Seo'
import { Header } from 'components/templates/shared/Header'
import { HomeIntro } from 'components/templates/Home/HomeIntro'
const Home: React.FC = () => {
  return (
    <div>
      <Seo />
      <Header />
      <HomeIntro />
    </div>
  )
}

export default Home
