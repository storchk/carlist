import type { LabelHTMLAttributes } from 'react'

import type { FontSize, FontWeights } from '../../../styles/fonts'
import type { ColorNames } from '../../../theme/colors'

export type TypographyProps = {
  color?: ColorNames | 'inherit'
  fontWeight?: FontWeights
  fontSize?: {
    mobile?: FontSize
    tablet?: FontSize
    desktop?: FontSize
  }
  tag?: keyof JSX.IntrinsicElements
} & LabelHTMLAttributes<HTMLElement>
