import React, { useContext } from 'react'
import PropTypes from 'prop-types'
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

Display.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ),
  equation: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  input: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
}

export default Display
