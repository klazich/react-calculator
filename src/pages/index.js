import React from 'react'
import { Box } from 'rebass'

// import Layout from '../components/Layout'
import Calculator from '../components/Calculator'

const Container = props => (
  <Box
    {...props}
    mx="auto"
    py={4}
    css={{
      maxWidth: '1024px',
      height: '100vh',
    }}
  />
)

export default () => (
  <Container bg="lightblue">
    <Box mx="auto" width={256}>
      <Calculator />
    </Box>
  </Container>
)
