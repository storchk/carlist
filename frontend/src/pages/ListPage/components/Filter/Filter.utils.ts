import type { ChangeEvent } from 'react'

export function getFilterValueByInput(event: ChangeEvent<HTMLSelectElement>): string {
  if (event.target.value?.toLocaleLowerCase() === 'beliebig') return 'all'
  return event.target.value
}
