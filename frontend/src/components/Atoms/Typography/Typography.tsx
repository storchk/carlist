import { StyledTypography } from './Typography.styled'
import type { TypographyProps } from './Typography.types'

export const Typography = ({ tag = 'span', children, ...props }: TypographyProps): JSX.Element => {
  return (
    <StyledTypography {...props} as={tag}>
      {children}
    </StyledTypography>
  )
}
