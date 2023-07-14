import { Offer } from '../../types'

export enum ActionType {
  SetCars = 'SetCars',
  ResetCars = 'ResetCars',
}

export type SetCarsAction = {
  type: ActionType.SetCars
  payload: {
    cars: Offer[]
  }
}

export type ResetCarsAction = {
  type: ActionType.ResetCars
}

export type ReducerAction = SetCarsAction | ResetCarsAction
