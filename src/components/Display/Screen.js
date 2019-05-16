import React from 'react'
import { Text } from 'rebass'

const style = {
  whiteSpace: 'nowrap',
}

function Screen(props) {
  const { children, size } = props

  const numDigitsToDisplay = size || Infinity
  const display = `${children}`.slice(0, numDigitsToDisplay)

  return (
    <Text
      fontFamily="Iosevka Web"
      fontWeight={400}
      fontSize={1}
      textAlign="right"
      bg="#f6f6ff"
      color="DimGrey"
      css={style}
      {...props}
    >
      {display}
    </Text>
  )
}

export default Screen
