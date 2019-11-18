import React, { useContext } from 'react'
import { Flex } from 'rebass'

import { CalculatorContext } from '../CalculatorProvider'
import Row from './Row'

const HistoryScreen = () => {
  const { state } = useContext(CalculatorContext)
  return (
    <Flex flexWrap="wrap">
      {state.expHistory.map((eq, id) => (
        <Row key={id} id={id}>
          {eq.join(' ')}
        </Row>
      ))}
    </Flex>
  )
}

export default HistoryScreen
