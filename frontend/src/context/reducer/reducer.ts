import _ from 'lodash'

import type { Offer } from '../../types'
import type { AppStateType } from '../Context.types'
import type {
  ReducerAction,
  SetAppliedFilterAction,
  SetCarsAction,
  SetFilterCarsAction,
} from './reducer.types'
import { ActionType } from './reducer.types'

function getUniqueCars(cars: Offer[]) {
  return Array.from(new Set(cars.map(car => car.id)))
    .map(id => {
      return cars.find(car => car.id === id)
    })
    .filter((car): car is Offer => !!car)
}

const setCars = (oldState: AppStateType, action: SetCarsAction): AppStateType => {
  return {
    ...oldState,
    cars: getUniqueCars([...oldState.cars, ...action.payload.cars]),
    filteredCars: getUniqueCars([...oldState.cars, ...action.payload.cars]),
  }
}

const resetCars = (oldState: AppStateType): AppStateType => {
  return { ...oldState, cars: oldState.cars, filteredCars: oldState.cars }
}

const setFilteredCars = (oldState: AppStateType, action: SetFilterCarsAction): AppStateType => {
  const { filter } = action.payload
  const filteredCars = oldState.cars.filter(car => {
    return filter.every(f => {
      return _.get(car, f.key).toLowerCase() === f.value?.toLocaleLowerCase()
    })
  })

  return { ...oldState, filteredCars }
}

const setAppliedFilter = (oldState: AppStateType, action: SetAppliedFilterAction): AppStateType => {
  // if filter value is null, remove it
  if (action.payload.filter.value === null) {
    return {
      ...oldState,
      appliedFilter: [
        ...oldState.appliedFilter.filter(filter => filter.key === action.payload.filter.key),
      ],
    }
  }
  // if filter already exists, update it
  if (oldState.appliedFilter.some(filter => filter.key === action.payload.filter.key)) {
    return {
      ...oldState,
      appliedFilter: oldState.appliedFilter.map(filter => {
        if (action.payload.filter.key !== filter.key) return filter
        return {
          ...filter,
          value: action.payload.filter.value,
        }
      }),
    }
  }
  // if filter doesn't exist, add it
  return {
    ...oldState,
    appliedFilter: [...oldState.appliedFilter, action.payload.filter],
  }
}

export const reducer = (oldState: AppStateType, action: ReducerAction): AppStateType => {
  switch (action.type) {
    case ActionType.SetCars:
      return setCars(oldState, action)

    case ActionType.ResetCars:
      return resetCars(oldState)

    case ActionType.SetFilterCars:
      return setFilteredCars(oldState, action)

    case ActionType.SetAppliedFilter:
      return setAppliedFilter(oldState, action)

    default:
      return oldState
  }
}