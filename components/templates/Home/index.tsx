import { HomeAbout } from 'components/templates/Home/HomeAbout'
import { HomeSkill } from 'components/templates/Home/HomeSkill'
import { HomeExperience } from 'components/templates/Home/HomeExperience'
import { HomePortfolio } from 'components/templates/Home/HomePortfolio'
import { HomeBlog } from 'components/templates/Home/HomeBlog'
import { HomeContact } from 'components/templates/Home/HomeContact'

export const homeComponents = [
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
