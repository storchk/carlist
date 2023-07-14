import { FC, useCallback, useReducer } from 'react'
import { useContext } from 'react'

import type { AppContextProviderProps, AppContextType, SetCarsType } from './Context.types'
import { AppContext } from './Context'
import { initialState } from './Context.constants'
import { reducer, ActionType } from './reducer'

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
  })

  const { cars } = state
  const setCars = useCallback((args: SetCarsType) => {
    dispatch({ type: ActionType.SetCars, payload: { cars: args } })
  }, [])

  const resetCars = useCallback(() => {
    dispatch({ type: ActionType.ResetCars })
  }, [])

  return (
    <AppContext.Provider
      value={{
        cars,
        setCars,
        resetCars,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextType => useContext(AppContext)
