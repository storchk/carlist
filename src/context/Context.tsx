import { createContext } from 'react'

import type { AppContextType } from './Context.types'

export const AppContext = createContext<AppContextType>({
  cars: [],
  filteredCars: [],
  appliedFilter: [],
  setCars: () => {
    throw new Error('not implemented')
  },
  resetCars: () => {
    throw new Error('not implemented')
  },
  setAppliedFilter: () => {
    throw new Error('not implemented')
  },
})
