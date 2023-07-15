import type { Car } from '@/graphql'

export enum ActionType {
  SetCars = 'SetCars',
  SetFilterCars = 'SetFilterCars',
  SetAppliedFilter = 'SetAppliedFilter',
}

export type SetCarsAction = {
  type: ActionType.SetCars
  payload: {
    cars: Car[]
  }
}

export type SetFilterCarsAction = {
  type: ActionType.SetFilterCars
  payload: {
    filter: {
      key: string
      value: string | null
    }[]
  }
}

export type SetAppliedFilterAction = {
  type: ActionType.SetAppliedFilter
  payload: {
    filter: {
      key: string
      value: string | null
    }
  }
}

export type ReducerAction = SetCarsAction | SetFilterCarsAction | SetAppliedFilterAction
