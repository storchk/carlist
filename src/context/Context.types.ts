import { Offer } from '../types'

export type SetCarsType = Offer[]

export type AppStateType = {
  cars: Offer[]
}

export type AppContextType = {
  setCars: (cars: SetCarsType) => void
  resetCars: () => void
} & AppStateType

export type AppContextProviderProps = {
  children?: JSX.Element | JSX.Element[]
}
