import React from 'react'
import { Box } from 'rebass'

import Calculator from '../components/Calculator'

const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: '1024px',
    }}
  />
)

export default () => (
  <div>
    <Container bg="lightblue">
      <Box mx="auto" width={256}>
        <Calculator />
      </Box>
    </Container>
  </div>
)
