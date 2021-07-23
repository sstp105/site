import styled, { css } from 'styled-components'
import { Image } from 'components/atoms/Image'

export interface IThemeProps {
  variant: 'flex' | 'stack'
  float: 'left' | 'right'
}

export interface IDefaultProps extends IThemeProps {
  hoverable: boolean
}

interface IProps extends Partial<IDefaultProps> {
  cardBanner: {
    url: string
    alt: string
  }
  children: React.ReactNode
}

const style = {
  variant: {
    flex: css`
      flex-direction: row;
      img {
        width: 60%;
      }

      ${(props) => props.theme.media.desktop_sm} {
        flex-direction: column;
        width: 70%;
        img {
          width: 100%;
          order: -1;
        }
      }
      ${(props) => props.theme.media.tablet} {
        width: 95%;
      }
    `,
    stack: css`
      flex-direction: column;
      width: 100%;
      img {
        height: 250px;
      }
      ${(props) => props.theme.media.tablet} {
        width: 90% !important;
      }
    `
  },
  float: {
    left: css`
      img {
        order: -1;
      }
    `,
    right: css`
      img {
        order: 2;
      }
    `
  }
}

const StyledCard = styled.div<IProps>`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.color.surface};
  /* box-shadow: rgb(115 127 143 / 16%) 0px 6px 16px; */
  width: 100%;
  transition: all 0.5s;
  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        transform: translateY(-15px);
      }
    `}

  ${(props) => style.float[props.float]}
  ${(props) => style.variant[props.variant]}
`

const StyledCardContent = styled.div`
  position: relative;
  padding: 25px;
  ${(props) => props.theme.media.desktop_sm} {
    width: calc(100% - 50px);
  }
`

export const Card: React.FC<IProps> = (props) => {
  const { cardBanner, children } = props

  return (
    <StyledCard {...props}>
      <Image
        src={cardBanner.url}
        alt={cardBanner.alt}
        width="100%"
        height="100%"
        variant="square"
      />
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  )
}

const defaultProps: IDefaultProps = {
  variant: 'stack',
  float: 'left',
  hoverable: false
}

Card.defaultProps = defaultProps
