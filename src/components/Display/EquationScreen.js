import React from 'react'
import { Card } from 'rebass'

import Screen from './Screen'

const EquationScreen = ({ children }) => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
    <Screen
      css={{
        height: '26px',
        overflow: 'hidden',
        textOverflow: 'clip',
      }}
    >
      {children}
    </Screen>
  </Card>
)

export default EquationScreen
