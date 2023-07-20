import { useCallback } from 'react'

import { Select } from '../../../../components/Atoms/Select'
import { useAppContext } from '../../../../context'
import { getFilterValueByInput, getAllBrands } from './Filter.utils'
import { useGetAllModels, useGetAllColors } from './Filter.hooks'
import { ChangeEventType } from './Filter.types'

export const Filter = (): JSX.Element => {
  const { setAppliedFilter } = useAppContext()
  const allBrands = getAllBrands()
  const allModels = useGetAllModels()
  const allColors = useGetAllColors()

  const onChangeBrand = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'brand',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

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
