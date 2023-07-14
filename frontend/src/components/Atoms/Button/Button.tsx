import type { MouseEvent } from 'react'

import { Typography } from '../Typography'
import { StyledButton } from './Button.styled'
import type { ButtonProps } from './Button.types'

export const Button = ({ label, onClick }: ButtonProps): JSX.Element => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.stopPropagation()

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <StyledButton onClick={handleOnClick}>
      <Typography fontSize={{ mobile: 'sm' }} fontWeight="bold">
        {label}
      </Typography>
    </StyledButton>
  )
}
