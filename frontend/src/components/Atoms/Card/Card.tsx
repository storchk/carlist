import { StyledCard, StyledCardText } from './Card.styled'
import type { CardProps } from './Card.types'
export const Card = ({ children, ...props }: CardProps): JSX.Element => {
  return (
    <StyledCard {...props}>
      <div>
        <StyledCardText>{children}</StyledCardText>
      </div>
    </StyledCard>
  )
}
