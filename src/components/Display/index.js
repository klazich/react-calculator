import React, { useContext } from 'react'
import { Box, Card } from 'rebass'

import { CalculatorContext, accToString } from '../CalculatorProvider'
import InputScreen from './InputScreen'
import ExpressionScreen from './ExpressionScreen'
import HistoryScreen from './HistoryScreen'

const Display = () => {
  const { state } = useContext(CalculatorContext)
  const { acc, expression, result } = state

  const showValue = result || accToString(acc)

  return (
    <Box p={0}>
      <Card>
        <HistoryScreen />
      </Card>
      <Card
        sx={{
          my: 2,
        }}
      >
        <ExpressionScreen>{expression}</ExpressionScreen>
        <InputScreen>{showValue}</InputScreen>
      </Card>
    </Box>
  )
}

export default Display
