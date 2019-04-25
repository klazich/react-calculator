import React from 'react'
import { Card } from 'rebass'

import Screen from './Screen'

const EquationScreen = props => (
  <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.2)" bg="#f6f6ff">
    <Screen
      px={2}
      py={1}
      mb={2}
      bg="#f6f6ff"
      color="DimGrey"
      fontWeight={400}
      fontSize={1}
      textAlign="right"
      {...props}
      css={{
        height: '26px',
      }}
    >
      {props.children}
    </Screen>
  </Card>
)

export default EquationScreen
