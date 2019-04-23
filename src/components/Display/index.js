import React from 'react'
import { Box } from 'rebass'

import InputScreen from './InputScreen'
import EquationScreen from './EquationScreen'
import HistoryScreen from './HistoryScreen'

const Display = props => (
  <Box>
    <HistoryScreen history={props.history} />
    <EquationScreen>{props.equation}</EquationScreen>
    <InputScreen>{props.input}</InputScreen>
  </Box>
)

export default Display
