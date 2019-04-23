import React from 'react'

import Screen from './Screen'

const InputScreen = props => (
  <Screen
    py={2}
    px={1}
    my={1}
    bg="AntiqueWhite"
    color="DimGrey"
    fontWeight={400}
    fontSize={5}
    textAlign="right"
    {...props}
  >
    {props.children}
  </Screen>
)

export default InputScreen
