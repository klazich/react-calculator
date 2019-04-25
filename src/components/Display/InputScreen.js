import React from 'react'
import { Card } from 'rebass'

import Screen from './Screen'

const InputScreen = props => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)">
    <Screen
      px={2}
      py={1}
      my={2}
      bg="#f6f6ff"
      color="DimGrey"
      fontWeight={600}
      fontSize={6}
      textAlign="right"
    >
      {props.children}
    </Screen>
  </Card>
)

export default InputScreen
