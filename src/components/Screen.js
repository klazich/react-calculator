import React from 'react'
import { Heading } from 'rebass'

const Screen = props => (
  <Heading
    py={3}
    px={2}
    my={2}
    bg="white"
    fontFamily="monospace"
    textAlign="right"
    {...props}
  >
    {props.children}
  </Heading>
)

export default Screen
