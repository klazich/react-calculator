import React from 'react'
import { Box, Heading as h } from 'rebass'
import styled from 'styled-components'

const Heading = styled(h)`
  border: 5px black;
`

const Screen = props => (
  <Box my={1} border="black">
    <Heading
      py={2}
      px={1}
      bg="AntiqueWhite"
      fontFamily="Iosevka Web"
      fontWeight={400}
      textAlign="right"
      {...props}
    >
      {props.children}
    </Heading>
  </Box>
)

export default Screen
