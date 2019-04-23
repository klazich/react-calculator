import React from 'react'
import { Heading } from 'rebass'

const Screen = props => (
  <Heading fontFamily="Iosevka Web" {...props}>
    {props.children}
  </Heading>
)

export default Screen
