import { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import { Styled } from 'components/organisms/Timeline/Timeline.style'
import {
  IThemeProps,
  IProps
} from 'components/organisms/Timeline/Timeline.type'
import { IExperience } from 'types/schema/Profile'
import { Image } from 'components/atoms/Image'

export const Timeline: React.FC<IProps<IExperience>> = (props) => {
  const { data } = props

  return (
    <Styled.Timeline>
      <ul>
        {data
          .sort((a, b) => {
            return a.startDate > b.startDate ? -1 : 1
          })
          .map((elem, index) => {
            const float = index % 2 == 0 ? 'left' : 'right'
            return <TimeLineItem key={elem._id} float={float} {...elem} />
          })}
        <div style={{ clear: 'both' }}></div>
      </ul>
    </Styled.Timeline>
  )
}

const TimeLineItem: React.FC<IExperience & IThemeProps> = (props) => {
  const { title, company, startDate, endDate, description, float } = props

  return (
    <Styled.TimelineItem float={float}>
      <Styled.Content float={float}>
        <Typography variant="subtitle" margin={false}>
          {company.name}
        </Typography>
        <Typography
          variant="body"
          margin={false}
          css={css`
            margin: 5px 0;
          `}
        >
          {title}
        </Typography>
        <Typography variant="note" margin={false}>
          {description}
        </Typography>
      </Styled.Content>

      <Styled.Date float={float}>
        <Typography variant="note" margin={false}>
          {startDate} - {endDate}
        </Typography>
      </Styled.Date>

      <Styled.Logo
        src={company.logo.url}
        alt={company.logo.alt}
        width="50px"
        height="50px"
        float={float}
      />
    </Styled.TimelineItem>
  )
}
