export type FontWeights = 'regular' | 'bold'

export type FontWeightType = {
  [weight in FontWeights]: number
}

export type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | 'xxxl'
  | 'xxxxl'
  | 'xxxxxl'

export type FontSizeType = {
  [size in FontSize]: string
}
export type FontFamilyType = {
  default: string
}

export type FontType = {
  fontFamily: FontFamilyType
  size: FontSizeType
  weight: FontWeightType
}

export const font: FontType = {
  fontFamily: {
    default: 'Titillium Web',
  },
  size: {
    xxs: '12px',
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    xxl: '28px',
    xxxl: '32px',
    xxxxl: '40px',
    xxxxxl: '48px',
  },
  weight: {
    bold: 700,
    regular: 400,
  },
}
