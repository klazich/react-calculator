import React from 'react'

import Screen from './Screen'

const style = {
  height: '22px',
  overflow: 'hidden',
  textOverflow: 'clip',
}

const EquationScreen = ({ children }) => (
  <Screen px={2} pt={1} color="Silver" css={style}>
    {children.join(' ')}
  </Screen>
)

export default EquationScreen
