import React from 'react'
import { Box, Flex } from 'rebass'

import Key from '../components/Key'

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
        <Flex
          flexWrap="wrap"
          flexDirection
          bg="gainsboro"
          p={1}
          justifyContent="center"
        >
          <Key size={1} label={0} />
          <Key size={1} label={1} />
          <Key size={1} label={2} />
          <Key size={3} label={3} />
        </Flex>
      </Box>
    </Container>
  </div>
)
