import React, { useContext } from 'react'

import { CalculatorContext, accToString } from '../../CalculatorProvider'

import AccDisplay from './AccDisplay'
import ExpressionDisplay from './ExpressionDisplay'

const InputDisplay = () => {
  const { state } = useContext(CalculatorContext)
  const { acc, expression, result } = state

  const showValue = result || accToString(acc)

  return (
    <>
      <ExpressionDisplay>{expression}</ExpressionDisplay>
      <AccDisplay>{showValue}</AccDisplay>
    </>
  )
}

export default InputDisplay
