import React, { useContext } from 'react'
import { Flex } from 'rebass'

import { CalculatorContext } from '../../CalculatorProvider'

import ExpHistoryItem from './ExpHistoryItem'

const ExpHistoryDisplay = () => {
  const { state } = useContext(CalculatorContext)

  return (
    <Flex flexWrap="wrap">
      {state.expHistory.map((eq, id) => (
        <ExpHistoryItem key={id} id={id}>
          {eq.join(' ')}
        </ExpHistoryItem>
      ))}
    </Flex>
  )
}

export default ExpHistoryDisplay
