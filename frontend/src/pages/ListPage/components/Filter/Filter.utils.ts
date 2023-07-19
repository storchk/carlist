import { ChangeEventType } from './Filter.types'

export function getFilterValueByInput(event: ChangeEventType): string {
  if (event.target.value?.toLocaleLowerCase() === 'beliebig') return 'all'
  return event.target.value
}
