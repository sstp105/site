import styled, { css } from 'styled-components'
import { Typography } from 'components/atoms/Typography'

const StyledContent = styled.div<{ float: 'left' | 'right' }>`
  padding: 20px;
  position: relative;
  background: #ecf7fd;
  border-radius: 0.4em;

  &:after {
    content: '';
    position: absolute;
    top: 15%;
    width: 0;
    height: 0;
    border: 16px solid transparent;
    margin-top: -8px;
    border-top: 0;

    ${(props) =>
      props.float === 'left' &&
      css`
        right: 0;
        border-left-color: #ecf7fd;
        border-right: 0;
        margin-right: -16px;
      `}

    ${(props) =>
      props.float === 'right' &&
      css`
        left: 0;
        border-right-color: #ecf7fd;
        border-left: 0;
        margin-left: -16px;
      `}

    ${(props) => props.theme.media.tablet} {
      display: none;
    }
  }
`

const StyledTimeContainer = styled.div``

interface IExperienceProps extends WorkExperience {
  float: 'left' | 'right'
}

export const ExperienceTimeLineItem: React.FC<IExperienceProps> = (props) => {
  const { title, company, startDate, endDate, description, float } = props
  return (
    <>
      <StyledContent float={float}>
        <Typography variant="h6" margin={false}>
          {company}
        </Typography>
        <Typography variant="body" margin={false}>
          {title}
        </Typography>
        <Typography
          variant="body"
          margin={false}
          css={css`
            color: rgb(99, 98, 98);
            font-size: 13px;
            line-height: 1.3rem;
          `}
        >
          {description}
        </Typography>
      </StyledContent>

      <StyledTimeContainer className="time">
        <Typography
          variant="caption"
          margin={false}
          css={css`
            font-size: 13px;
          `}
        >
          {startDate} - {endDate}
        </Typography>
      </StyledTimeContainer>
    </>
  )
}

//------------------------------------------------------------------------

const StyledTimeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  // Center line
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #c5c5c5;
  }

  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }

  ${(props) => props.theme.media.tablet} {
    padding-bottom: 0;
    &:before {
      left: 20px;
      height: 100%;
    }
  }
`

const StyledTimelineItem = styled.li`
  list-style: none;
  position: relative;
  width: 50%;
  padding: 20px 40px;
  box-sizing: border-box;
  margin-bottom: 20px;
  &:nth-child(odd) {
    float: left;
    text-align: right;
    clear: both;
  }
  &:nth-child(even) {
    float: right;
    text-align: left;
    clear: both;
  }
  &:nth-child(odd) .time {
    position: absolute;
    top: 19px;
    right: -163px;
    margin: 0;
    padding: 8px 16px;
    background: #bbe4f9;
    color: rgb(0, 0, 0);
    border-radius: 18px;
  }
  &:nth-child(even) .time {
    position: absolute;
    top: 19px;
    left: -163px;
    margin: 0;
    padding: 8px 16px;
    background: #bbe4f9;
    color: rgb(0, 0, 0);
    border-radius: 18px;
  }
  &:nth-child(odd):before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 24px;
    right: -6px;
    background: #bbe4f9;
    border-radius: 50%;
  }
  &:nth-child(even):before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    top: 24px;
    left: -4px;
    background: #bbe4f9;
    border-radius: 50%;
  }

  ${(props) => props.theme.media.tablet} {
    &:nth-child(odd),
    &:nth-child(even) {
      width: 100%;
      text-align: left;
      padding-left: 50px;
      padding-bottom: 50px;
    }
    &:nth-child(odd):before,
    &:nth-child(even):before {
      top: -18px;
      left: 16px;
    }
    &:nth-child(odd) .time,
    &:nth-child(even) .time {
      top: -30px;
      left: 50px;
      right: inherit;
    }
  }
`

interface WorkExperience {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
}

interface IProps {
  data: Array<WorkExperience>
}

export const Timeline: React.FC<IProps> = (props) => {
  const { data } = props

  return (
    <StyledTimeline>
      <ul>
        {data.map((elem, index) => {
          const float = index % 2 == 0 ? 'left' : 'right'
          return (
            <StyledTimelineItem>
              <ExperienceTimeLineItem
                key={elem.company}
                float={float}
                {...elem}
              />
            </StyledTimelineItem>
          )
        })}
        <div style={{ clear: 'both' }}></div>
      </ul>
    </StyledTimeline>
  )
}
