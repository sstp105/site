import { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'
import {
  StyledTimeline,
  StyledTimelineItem,
  StyledContent,
  StyledDate
} from 'components/molecules/Timeline/style'
import {
  IExperience,
  IThemeProps,
  IProps
} from 'components/molecules/Timeline/type'

export const Timeline: React.FC<IProps> = (props) => {
  const { data } = props

  return (
    <StyledTimeline>
      <ul>
        {data.map((elem, index) => {
          const float = index % 2 == 0 ? 'left' : 'right'
          return <TimeLineItem key={elem.company} float={float} {...elem} />
        })}
        <div style={{ clear: 'both' }}></div>
      </ul>
    </StyledTimeline>
  )
}

const TimeLineItem: React.FC<IExperience & IThemeProps> = (props) => {
  const { title, company, startDate, endDate, description, float } = props

  return (
    <StyledTimelineItem float={float}>
      <StyledContent float={float}>
        <Typography variant="subtitle" margin={false}>
          {company}
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
      </StyledContent>

      <StyledDate float={float}>
        <Typography variant="note" margin={false}>
          {startDate} - {endDate}
        </Typography>
      </StyledDate>
    </StyledTimelineItem>
  )
}
