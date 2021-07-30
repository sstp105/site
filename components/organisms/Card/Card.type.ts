import { HTMLElement } from 'types/HTMLElement'

/**
 * @interface IThemeProps Card component theme props
 */
export interface IThemeProps {
  /**
   * The height of the Card, auto-expand
   * @type {string} CSS valid values. e.g. 500px
   */
  height: string

  /**
   * The variant of the Card
   * @type {flex} Display the media and content in same row
   * @type {stack} Display content in a stack format
   */
  variant: 'flex' | 'stack'

  /**
   * The media postion relative to the content
   * @type {left} The media will on the left side
   * @type {right} The media will on the right side
   */
  float: 'left' | 'right'

  /**
   * Enable Card hover animation
   */
  hoverable: boolean
}

/**
 * @interface IDefaultProps Card component optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for Card media
   */
  mediaTestId: string
}

/**
 * @interface IProps Card component required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Card media
   */
  media: HTMLElement.Image

  /**
   * Card children elements
   */
  children: React.ReactNode
}

export type PropsToOmit = 'mediaTestId'
