import { SizeMedium } from 'types/Size'

interface Radius {
  variant: SizeMedium | 'circle'
}

export const radius: Record<Radius['variant'], string> = {
  xs: '5px',
  s: '10px',
  m: '15px',
  l: '20px',
  xl: '25px',
  circle: '50%'
}
