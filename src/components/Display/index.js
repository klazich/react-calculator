import React from 'react'
import { Box, Card } from 'rebass'

import InputScreen from './InputScreen'
import EquationScreen from './EquationScreen'
import HistoryScreen from './HistoryScreen'

const Display = props => (
  <Box>
    <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
      <HistoryScreen history={props.history} />
    </Card>
    <Card my={2} boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
      <EquationScreen>{props.equation}</EquationScreen>
      <InputScreen>{props.input}</InputScreen>
    </Card>
  </Box>
)

export default Display
