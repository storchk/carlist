import type { Car } from '@/graphql'
import { mockedCar1, mockedCar2 } from '@/mocks'

import { initialState } from '../Context.constants'
import { reducer } from './reducer'
import type { SetAppliedFilterAction, SetCarsAction, SetFilterCarsAction } from './reducer.types'
import { ActionType } from './reducer.types'

describe('reducer', () => {
  it('should handle setCars', () => {
    const cars: Car[] = [mockedCar1]
    const action: SetCarsAction = { type: ActionType.SetCars, payload: { cars } }
    const expectedState = {
      ...initialState,
      cars,
      filteredCars: cars,
    }
    expect(reducer(initialState, action)).toStrictEqual(expectedState)
  })

  it('should handle setFilterCars', () => {
    const cars: Car[] = [mockedCar1, mockedCar2]

    const action: SetFilterCarsAction = {
      type: ActionType.SetFilterCars,
      payload: {
        filter: [{ key: 'brand', value: 'Opel' }],
      },
    }
    const expectedState = {
      ...initialState,
      cars,
      filteredCars: [mockedCar2],
    }
    expect(reducer({ ...initialState, cars }, action)).toStrictEqual(expectedState)
  })

  it('should handle setAppliedFilter when filter value is null', () => {
    const appliedFilter = [{ key: 'brand', value: 'Opel' }]

    const action: SetAppliedFilterAction = {
      type: ActionType.SetAppliedFilter,
      payload: { filter: { key: 'brand', value: 'all' } },
    }
    const expectedState = {
      ...initialState,
      appliedFilter: [],
    }
    expect(reducer({ ...initialState, appliedFilter }, action)).toStrictEqual(expectedState)
  })

  it('should handle SET_APPLIED_FILTER when filter already exists', () => {
    const appliedFilter = [{ key: 'brand', value: 'Opel' }]
    const action: SetAppliedFilterAction = {
      type: ActionType.SetAppliedFilter,
      payload: { filter: { key: 'brand', value: 'Volkswagen' } },
    }
    const expectedState = {
      ...initialState,
      appliedFilter: [{ key: 'brand', value: 'Volkswagen' }],
    }
    expect(reducer({ ...initialState, appliedFilter }, action)).toStrictEqual(expectedState)
  })

  it('should handle SET_APPLIED_FILTER when filter does not exist', () => {
    const appliedFilter = [{ key: 'brand', value: 'Opel' }]
    const action: SetAppliedFilterAction = {
      type: ActionType.SetAppliedFilter,
      payload: { filter: { key: 'model', value: 'Crossland' } },
    }
    const expectedState = {
      ...initialState,
      appliedFilter: [
        { key: 'brand', value: 'Opel' },
        { key: 'model', value: 'Crossland' },
      ],
    }
    expect(reducer({ ...initialState, appliedFilter }, action)).toStrictEqual(expectedState)
  })
})
