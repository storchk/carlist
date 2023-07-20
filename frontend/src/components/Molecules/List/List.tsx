import { Typography } from '../../Atoms/Typography'
import { StyledList, StyledListItem } from './List.styled'
import type { ListProps } from './List.types'
export const List = ({ items }: ListProps): JSX.Element | null => {
  if (!items) return null
  return (
    <StyledList>
      {items.map((item, index) => {
        const isDisabled = !item.value

        return (
          <StyledListItem key={index} $isDisabled={isDisabled}>
            <Typography tag="span" fontWeight="bold">
              {item.label}:
            </Typography>
            <Typography tag="span">{isDisabled ? 'k.A.' : ` ${item.value}`}</Typography>
          </StyledListItem>
        )
      })}
    </StyledList>
  )
}
