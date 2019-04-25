import React from 'react'
import { Flex, Card } from 'rebass'

import Screen from './Screen'

const Row = props => (
  <Screen
    width={1}
    px={2}
    py={1}
    bg="#f6f6ff"
    color="DimGrey"
    fontWeight={400}
    fontSize={1}
    textAlign="right"
    css={{
      height: '26px',
    }}
  >
    {props.children}
  </Screen>
)

const HistoryScreen = props => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
    <Flex flexWrap="wrap">
      {props.history.map((eq, id) => (
        <Row key={id}>{eq}</Row>
      ))}
    </Flex>
  </Card>
)

export default HistoryScreen
