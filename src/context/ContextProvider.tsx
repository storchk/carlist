import type { FC } from 'react'
import { useCallback, useEffect, useReducer } from 'react'

import { AppContext } from './Context'
import { initialState } from './Context.constants'
import type { AppContextProviderProps, SetCarsType, SetFilterCarsType } from './Context.types'
import { ActionType, reducer } from './reducer'

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  })

  const { cars, filteredCars, appliedFilter } = state

  const setCars = useCallback((args: SetCarsType) => {
    dispatch({ type: ActionType.SetCars, payload: { cars: args } })
  }, [])

  const resetCars = useCallback(() => {
    dispatch({ type: ActionType.ResetCars })
  }, [])

  const setFilterCars = useCallback((args: SetFilterCarsType[]) => {
    dispatch({ type: ActionType.SetFilterCars, payload: { filter: args } })
  }, [])

  const setAppliedFilter = useCallback((args: SetFilterCarsType) => {
    dispatch({ type: ActionType.SetAppliedFilter, payload: { filter: args } })
  }, [])

  useEffect(() => {
    if (appliedFilter.length) {
      setFilterCars(appliedFilter)
    }
  }, [appliedFilter, setFilterCars])

  return (
    <AppContext.Provider
      value={{
        appliedFilter,
        cars,
        filteredCars,
        setCars,
        resetCars,
        setAppliedFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
