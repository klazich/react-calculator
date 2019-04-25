import React from 'react'

import Screen from './Screen'

const EquationScreen = props => (
  <Screen
    px={2}
    py={1}
    my={1}
    bg="AntiqueWhite"
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
)

export default EquationScreen
