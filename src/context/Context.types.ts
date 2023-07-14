import type { Offer } from '../types'

export type FilterableValues = 'brand' | 'model' | 'color' | 'drivetrain.fuel.type'
export type SetCarsType = Offer[]
export type SetFilterCarsType = {
  key: FilterableValues
  value: string | null
}
export type AppliedFilterType = {
  key: FilterableValues
  value: string | null
}
export type AppStateType = {
  cars: Offer[]
  filteredCars: Offer[]
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
