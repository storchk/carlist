import { Typography } from '../Typography'
import { StyledSelect } from './Select.styled'
import type { SelectProps } from './Select.types'

export const Select = ({ options, label, id, selected, ...props }: SelectProps) => {
  return (
    <StyledSelect>
      <label htmlFor={id}>
        <Typography
          fontSize={{
            mobile: 'xs',
          }}
          fontWeight="bold"
        >
          {label}
        </Typography>
      </label>
      <select id={id} defaultValue={selected} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value?.toLocaleLowerCase()}>
            {option.label}
          </option>
        ))}
      </select>
    </StyledSelect>
  )
}
