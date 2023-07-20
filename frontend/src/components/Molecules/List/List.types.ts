export type ListProps = {
  items: ListItemProps[]
}

export type ListItemProps = {
  label: string
  value?: string | null
}

export type StyledListItemProps = {
  $isDisabled: boolean
}
