import { ActionType, ReducerAction, SetCarsAction } from './reducer.types'
import { AppStateType } from '../Context.types'

const setCars = (oldState: AppStateType, action: SetCarsAction): AppStateType => {
  const updated = [...action.payload.cars]
  // if (oldState.originals.materials.length === 0) {
  //   return {
  //     ...oldState,
  //     materials: updated,
  //     originals: { ...oldState.originals, materials: updated },
  //   }
  // }
  return { ...oldState, cars: updated }
}

const resetCars = (oldState: AppStateType): AppStateType => {
  // if (oldState.originals.materials.length === 0) {
  //   return {
  //     ...oldState,
  //     materials: updated,
  //     originals: { ...oldState.originals, materials: updated },
  //   }
  // }
  return { ...oldState, cars: [] }
}

export const reducer = (oldState: AppStateType, action: ReducerAction): AppStateType => {
  switch (action.type) {
    case ActionType.SetCars:
      return setCars(oldState, action)

    case ActionType.ResetCars:
      return resetCars(oldState)

    default:
      return oldState
  }
}
