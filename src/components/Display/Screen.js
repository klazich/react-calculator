import React from 'react'
import { Text } from 'rebass'

const Screen = props => (
  <Text fontFamily="Iosevka Web" {...props}>
    {props.children}
  </Text>
)

export default Screen
