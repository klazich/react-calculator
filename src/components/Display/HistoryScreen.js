import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from 'rebass'

import Row from './Row'

function HistoryScreen(props) {
  return (
    <Flex flexWrap="wrap">
      {props.history.map((eq, id) => (
        <Row key={id} id={id}>
          {eq.join(' ')}
        </Row>
      ))}
    </Flex>
  )
}

HistoryScreen.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ),
}

export default HistoryScreen
