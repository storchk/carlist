import type { Car } from '@/graphql'

export type SetCarsType = Car[]
export type SetFilterCarsType = {
  key: string
  value: string | null
}
export type AppliedFilterType = {
  key: string
  value: string | null
}
export type AppStateType = {
  cars: Car[]
  filteredCars: Car[]
  appliedFilter: AppliedFilterType[]
}

export type AppContextType = {
  setCars: (cars: SetCarsType) => void
  setAppliedFilter: (filter: AppliedFilterType) => void
  resetCars: () => void
} & AppStateType

export type AppContextProviderProps = {
  children?: JSX.Element | JSX.Element[]
}
