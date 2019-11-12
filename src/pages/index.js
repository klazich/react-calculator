import React from 'react'
import { Box } from 'rebass'

import '../fonts/fonts.css'
import Calculator from '../components/Calculator'
import CalculatorProvider from '../components/CalculatorProvider'

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

const main = () => (
  <CalculatorProvider>
    <Container>
      <Box mx="auto" width={256}>
        <Calculator />
      </Box>
    </Container>
  </CalculatorProvider>
)

export default main
