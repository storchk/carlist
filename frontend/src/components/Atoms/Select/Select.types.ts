import type { ChangeEvent } from 'react'

export type SelectOptionProps = {
  value: string | null
  label: string
}
export type SelectProps = {
  label: string
  name: string
  id: string
  options: SelectOptionProps[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}
