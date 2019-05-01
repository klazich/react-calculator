import React from 'react'
import { Text } from 'rebass'

function Screen(props) {
  const { children, size } = props

  const numDigitsToDisplay = size || Infinity
  const display = `${children}`.slice(0, numDigitsToDisplay)

  return (
    <Text
      px={2}
      py={1}
      fontFamily="Iosevka Web"
      fontWeight={400}
      fontSize={1}
      textAlign="right"
      bg="#f6f6ff"
      color="DimGrey"
      css={{
        whiteSpace: 'nowrap',
      }}
      {...props}
    >
      {display}
    </Text>
  )
}

export default Screen
