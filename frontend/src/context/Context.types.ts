import type { Car } from '@/graphql'

export type FilterableValues = 'brand' | 'model' | 'color' | 'drivetrain.fuel.type'
export type SetCarsType = Car[]
export type SetFilterCarsType = {
  key: FilterableValues
  value: string | null
}
export type AppliedFilterType = {
  key: FilterableValues
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
