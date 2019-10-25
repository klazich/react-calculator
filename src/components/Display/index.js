import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card } from 'rebass'

import InputScreen from './InputScreen'
import EquationScreen from './EquationScreen'
import HistoryScreen from './HistoryScreen'

function Display(props) {
  return (
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
