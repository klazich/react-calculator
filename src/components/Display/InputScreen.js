import React from 'react'

import Screen from './Screen'

const InputScreen = props => (
  <Screen
    px={2}
    py={1}
    mb={1}
    bg="AntiqueWhite"
    color="DimGrey"
    fontWeight={600}
    fontSize={6}
    textAlign="right"
  >
    {props.children}
  </Screen>
)

export default InputScreen
