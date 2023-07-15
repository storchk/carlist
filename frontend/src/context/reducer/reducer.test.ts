import { reducer } from './reducer'
import {
  ActionType,
  SetAppliedFilterAction,
  SetCarsAction,
  SetFilterCarsAction,
} from './reducer.types'
import { initialState } from '../Context.constants'
import { mockedCar1, mockedCar2 } from './mocks'
import { Car } from '@/graphql'

describe('reducer', () => {
  it('should handle setCars', () => {
    const cars: Car[] = [mockedCar1]
    const action: SetCarsAction = { type: ActionType.SetCars, payload: { cars } }
    const expectedState = {
      ...initialState,
      cars,
      filteredCars: cars,
    }
    expect(reducer(initialState, action)).toEqual(expectedState)
  })

  it('should handle setFilterCars', () => {
    const cars: Car[] = [mockedCar1, mockedCar2]

    const filter = [{ key: 'brand', value: 'Opel' }]
    const action: SetFilterCarsAction = { type: ActionType.SetFilterCars, payload: { filter } }
    const expectedState = {
      ...initialState,
      filteredCars: [mockedCar2],
    }
    expect(reducer({ ...initialState, cars }, action)).toEqual(expectedState)
  })

  it('should handle setAppliedFilter when filter value is null', () => {
    const appliedFilter = [{ key: 'brand', value: 'Opel' }]
    const filter = { key: 'brand', value: null }
    const action: SetAppliedFilterAction = {
      type: ActionType.SetAppliedFilter,
      payload: { filter },
    }
    const expectedState = {
      ...initialState,
      appliedFilter: [],
    }
    expect(reducer({ ...initialState, appliedFilter }, action)).toEqual(expectedState)
  })

  it('should handle SET_APPLIED_FILTER when filter already exists', () => {
    const appliedFilter = [{ key: 'brand', value: 'Opel' }]
    const filter = { key: 'brand', value: 'Volkswagen' }
    const action: SetAppliedFilterAction = {
      type: ActionType.SetAppliedFilter,
      payload: { filter },
    }
    const expectedState = {
      ...initialState,
      appliedFilter: [{ key: 'brand', value: 'Volkswagen' }],
    }
    expect(reducer({ ...initialState, appliedFilter }, action)).toEqual(expectedState)
  })

  it('should handle SET_APPLIED_FILTER when filter does not exist', () => {
    const appliedFilter = [{ key: 'brand', value: 'Opel' }]
    const filter = { key: 'model', value: 'Crossland' }
    const action: SetAppliedFilterAction = {
      type: ActionType.SetAppliedFilter,
      payload: { filter },
    }
    const expectedState = {
      ...initialState,
      appliedFilter: [
        { key: 'brand', value: 'Opel' },
        { key: 'model', value: 'Crossland' },
      ],
    }
    expect(reducer({ ...initialState, appliedFilter }, action)).toEqual(expectedState)
  })
})
