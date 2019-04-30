import React from 'react'
import { Flex, Card } from 'rebass'

import Screen from './Screen'

const Row = ({ children }) => (
  <Screen
    width={1}
    css={{
      height: '26px',
      overflow: 'hidden',
      textOverflow: 'clip',
    }}
  >
    {children}
  </Screen>
)

const HistoryScreen = props => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
    <Flex flexWrap="wrap">
      {props.history.map((eq, id) => (
        <Row key={id}>{eq.join(' ')}</Row>
      ))}
    </Flex>
  </Card>
)

export default HistoryScreen
