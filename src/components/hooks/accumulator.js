import { useState, useMemo } from 'react'

const INTEGER = 'INTEGER'
const FRACTION = 'FRACTION'

// const ext = v => pre => `${pre}${v}`
// const del = () => pre => pre.slice(0, -1)

export const useAccumulator = () => {
  const [integerValue, setIntegerValue] = useState('0')
  const [fractionValue, setFractionValue] = useState(null)
  const [valueToUpdate, setValueToUpdate] = useState(INTEGER)

  const [value, setValue] =
    valueToUpdate === INTEGER
      ? [integerValue, setIntegerValue]
      : [fractionValue, setFractionValue]

  const update = key => {
    if (/[0-9]/.test(key)) setValue(`${value}${key}`)
    if (key === '.') setValueToUpdate(FRACTION)
    if (key === '↤') {
      if (valueToUpdate === INTEGER && value.length === 1) {
        setValue('0')
      } else if (valueToUpdate === FRACTION && value.length === 0) {
        setValue(null)
        setValueToUpdate(INTEGER)
      } else {
        setValue(value.slice(0, -1))
      }
    }
  }

  const reset = () => {
    setIntegerValue('0')
    setFractionValue(null)
    setValueToUpdate(INTEGER)
  }

  const state = useMemo(() => Number(`${integerValue}.${fractionValue}`), [
    integerValue,
    fractionValue,
  ])

  const api = { update, reset }

  return [state, api]
}
