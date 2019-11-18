import React, { useContext } from 'react'
import { Box, Card } from 'rebass'

import { CalculatorContext } from '../CalculatorProvider'
import InputScreen from './InputScreen'
import EquationScreen from './EquationScreen'
import HistoryScreen from './HistoryScreen'

const Display = () => {
  const { state, display } = useContext(CalculatorContext)
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
        <EquationScreen>{state.expression}</EquationScreen>
        <InputScreen>{display}</InputScreen>
      </Card>
    </Box>
  )
}

export default Display
