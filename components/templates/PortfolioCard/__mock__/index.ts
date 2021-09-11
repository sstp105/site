import { IPortfolioCard } from 'components/templates/PortfolioCard'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'

export const TESTCASE_1: IPortfolioCard = {
  banner: {
    url: 'IMAGE_SRC'
  },
  title: 'ProjectHub',
  description: 'Project management system',
  tags: ['React', 'Typescript', 'SASS'],
  info: [
    {
      icon: FONTAWESOME_ICONS.github,
      content: 'Github'
    }
  ],
  pathTo: '/projecthub',
  curIndex: 0
}
