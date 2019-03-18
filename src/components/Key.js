import React from 'react'
import { Box, Button } from 'rebass'
// import PropTypes from 'prop-types'

const Key = props => (
  <Box bg="lightpink" width={props.size / 4} p={1} {...props}>
    <Button
      color="white"
      bg="DarkSlateGray"
      width={1}
      borderRadius={0}
      fontSize={4}
      onClick={() => props.onKey(props.value)}
      data-value={props.value}
    >
      {props.value}
    </Button>
  </Box>
)

export default Key
