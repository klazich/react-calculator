import React from 'react'
import { Flex } from 'rebass'

import EquationScreen from './EquationScreen'

const HistoryScreen = props => (
  <Flex flexWrap="wrap" {...props}>
    {props.history.map((eq, id) => (
      <EquationScreen width={1} key={id} mt={0}>
        {eq}
      </EquationScreen>
    ))}
  </Flex>
)

export default HistoryScreen
