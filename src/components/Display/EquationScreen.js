import React from 'react'

import Screen from './Screen'

const EquationScreen = ({ children }) => (
  <Screen
    px={2}
    pt={1}
    color="Silver"
    css={{
      height: '22px',
      overflow: 'hidden',
      textOverflow: 'clip',
    }}
  >
    {children.join(' ')}
  </Screen>
)

export default EquationScreen
