import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card } from 'rebass'

import InputScreen from './InputScreen'
import EquationScreen from './EquationScreen'
import HistoryScreen from './HistoryScreen'

const Display = props => (
  <Box p={0}>
    <Card>
      <HistoryScreen history={props.history} />
    </Card>
    <Card
      sx={{
        my: 2,
      }}
    >
      <EquationScreen>{props.equation}</EquationScreen>
      <InputScreen>{props.input}</InputScreen>
    </Card>
  </Box>
)

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
