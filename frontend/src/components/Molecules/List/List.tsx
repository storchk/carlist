import { StyledList, StyledListItem } from './List.styled'
import { ListProps } from './List.types'
import { Typography } from '../../Atoms/Typography'
export const List = ({ items }: ListProps): JSX.Element | null => {
  if (!items) return null
  return (
    <StyledList>
      {items.map((item, index) => {
        const isDisabled = !Boolean(item.value)

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
