import React from 'react'
import { Text } from 'rebass'

const Screen = props => (
  <Text
    px={2}
    py={1}
    fontFamily="Iosevka Web"
    textAlign="right"
    bg="#f6f6ff"
    color="DimGrey"
    css={{
      whiteSpace: 'nowrap',
    }}
    {...props}
  >
    {props.children}
  </Text>
)

export default Screen
