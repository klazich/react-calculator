import React from 'react'
import { Box } from 'rebass'

import Layout from '../layouts'
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
  <Layout>
    <Container>
      <Box mx="auto" width={256}>
        <Calculator />
      </Box>
    </Container>
  </Layout>
)
