import type { Car } from '@/graphql'

import type { FilterableValues } from '../Context.types'

export enum ActionType {
  SetCars = 'SetCars',
  ResetCars = 'ResetCars',
  SetFilterCars = 'SetFilterCars',
  SetAppliedFilter = 'SetAppliedFilter',
}

export type SetCarsAction = {
  type: ActionType.SetCars
  payload: {
    cars: Car[]
  }
}

export type ResetCarsAction = {
  type: ActionType.ResetCars
}

export type SetFilterCarsAction = {
  type: ActionType.SetFilterCars
  payload: {
    filter: {
      key: FilterableValues
      value: string | null
    }[]
  }
}

export type SetAppliedFilterAction = {
  type: ActionType.SetAppliedFilter
  payload: {
    filter: {
      key: FilterableValues
      value: string | null
    }
  }
}

export type ReducerAction =
  | SetCarsAction
  | ResetCarsAction
  | SetFilterCarsAction
  | SetAppliedFilterAction
