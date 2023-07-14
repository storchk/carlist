import { Typography } from '../Typography'
import { StyledBadge } from './Badge.styled'
import type { BadgeProps } from './Badge.types'
export const Badge = ({ label, ...props }: BadgeProps): JSX.Element => {
  return (
    <StyledBadge {...props}>
      <Typography fontSize={{ mobile: 'xxs' }} fontWeight="bold">
        {label}
      </Typography>
    </StyledBadge>
  )
}
