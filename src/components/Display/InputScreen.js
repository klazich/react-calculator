import React from 'react'
import { Card } from 'rebass'

import Screen from './Screen'

const InputScreen = ({ children }) => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)">
    <Screen
      my={2}
      fontWeight={600}
      fontSize={6}
      css={{
        overflow: 'hidden',
        textOverflow: 'clip',
      }}
    >
      {children}
    </Screen>
  </Card>
)

export default InputScreen
