import React from 'react'

import Screen from './Screen'

const InputScreen = props => (
  <Screen
    py={2}
    px={1}
    bg="AntiqueWhite"
    fontWeight={400}
    fontSize={5}
    textAlign="right"
    {...props}
  >
    {props.children}
  </Screen>
)

export default InputScreen
