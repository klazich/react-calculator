import React, { useContext } from 'react'
import { Flex, Card } from 'rebass'

import Screen from './Screen'

import { useEquation } from '../../state/actions'
import { CalculatorDispatch } from '../Calculator'

function Row({ children, id }) {
  const dispatch = useContext(CalculatorDispatch)

  return (
    <Screen
      px={2}
      py={1}
      width={1}
      color="DarkGray"
      onClick={() => dispatch(useEquation(id))}
      css={{
        height: '26px',
        overflow: 'hidden',
        textOverflow: 'clip',
      }}
    >
      {children}
    </Screen>
  )
}

const HistoryScreen = props => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
    <Flex flexWrap="wrap">
      {props.history.map((eq, id) => (
        <Row key={id} id={id}>
          {eq.join(' ')}
        </Row>
      ))}
    </Flex>
  </Card>
)

export default HistoryScreen
