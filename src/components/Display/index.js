import React from 'react'
import { Box, Card } from 'rebass'

import ExpHistoryDisplay from './ExpHistoryDisplay'
import InputDisplay from './InputDisplay'

const Display = () => (
  <Box p={0}>
    <Card>
      <ExpHistoryDisplay />
    </Card>
    <Card
      sx={{
        my: 2,
      }}
    >
      <InputDisplay />
    </Card>
  </Box>
)

export default Display
