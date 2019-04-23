import React from 'react'

import Screen from './Screen'

const EquationScreen = props => (
  <Screen
    py={2}
    px={1}
    mt={1}
    bg="AntiqueWhite"
    color="DimGrey"
    fontWeight={400}
    fontSize={1}
    textAlign="right"
    {...props}
    css={{
      height: '32px',
    }}
  >
    {props.children}
  </Screen>
)

export default EquationScreen
