import React from 'react'

import Screen from './Screen'

const InputScreen = ({ children }) => (
  <Screen
    px={2}
    pb={1}
    fontWeight={600}
    fontSize={5}
    size={15}
    css={{
      overflow: 'hidden',
      textOverflow: 'clip',
    }}
  >
    {children}
  </Screen>
)

export default InputScreen
