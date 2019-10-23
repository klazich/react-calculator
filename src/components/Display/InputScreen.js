import React from 'react'

import Screen from './Screen'

const style = {
  overflow: 'hidden',
  textOverflow: 'clip',
}

const InputScreen = ({ children }) => (
  <Screen px={2} pb={1} fontWeight={600} fontSize={5} size={15} css={style}>
    {children}
  </Screen>
)

export default InputScreen
