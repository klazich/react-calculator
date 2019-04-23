import React from 'react'
import { Box, Heading } from 'rebass'

const Screen = props => (
  <Box my={1}>
    <Heading fontFamily="Iosevka Web" {...props}>
      {props.children}
    </Heading>
  </Box>
)

export default Screen
