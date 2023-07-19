import { useCallback } from 'react'

import { Select } from '../../../../components/Atoms/Select'
import { useAppContext } from '../../../../context'
import { getAllBrands, getAllColors, getAllModels } from '../../ListPage.utils'
import { getFilterValueByInput } from './Filter.utils'
import { ChangeEventType } from './Filter.types'

export const Filter = (): JSX.Element => {
  const { cars, setAppliedFilter } = useAppContext()
  const allBrands = getAllBrands()
  const allModels = getAllModels(cars)
  const allColors = getAllColors(cars)

  const onChangeBrand = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'brand',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )
  // TODO create type for ChangeEventType
  const onChangeModel = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'model',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

  const onChangeGear = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'color',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

  return (
    <>
      <Select
        id="brands"
        name="brands"
        label="Marke"
        options={allBrands.map(item => ({ value: item, label: item }))}
        onChange={onChangeBrand}
      />
      <Select
        id="models"
        name="models"
        label="Model"
        options={allModels.map(item => ({ value: item, label: item }))}
        onChange={onChangeModel}
      />
      <Select
        id="color"
        name="color"
        label="Farbe"
        options={allColors.map(item => ({ value: item, label: item }))}
        onChange={onChangeGear}
      />
    </>
  )
}
