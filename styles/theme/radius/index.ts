import { SizeLarge } from 'types/style/Size'

interface Radius {
  variant: SizeLarge | 'circle'
}

export const radius: Record<Radius['variant'], string> = {
  xxs: '5px',
  xs: '10px',
  s: '15px',
  m: '20px',
  l: '25px',
  xl: '30px',
  xxl: '35px',
  circle: '50%'
}
