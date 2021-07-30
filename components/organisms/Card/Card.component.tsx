import { Image } from 'components/atoms/Image'
import { Styled } from 'components/organisms/Card/Card.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/organisms/Card/Card.type'

export const Card: React.FC<IProps> = (props) => {
  const { media, children, mediaTestId, ...themeProps } = props

  return (
    <Styled.Card {...themeProps}>
      <Image
        src={media.url}
        alt={media.alt}
        width="100%"
        height="100%"
        variant="square"
        testId={mediaTestId}
      />
      <Styled.CardContent>{children}</Styled.CardContent>
    </Styled.Card>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  variant: 'stack',
  float: 'left',
  hoverable: false,
  height: '100%'
}

Card.defaultProps = defaultProps
