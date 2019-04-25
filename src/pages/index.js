import React from 'react'
import { Box } from 'rebass'

// import Layout from '../layouts'
import '../fonts/fonts.css'
import Calculator from '../components/Calculator'

const Container = props => (
  <Box
    {...props}
    mx="auto"
    py={4}
    css={{
      maxWidth: '1024px',
    }}
  />
)

export default () => (
  <Container>
    <Box mx="auto" width={256}>
      <Calculator />
    </Box>
  </Container>
)
