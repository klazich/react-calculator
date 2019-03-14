import React from 'react'
import { Box, Button, Flex, Text } from 'rebass'
// import PropTypes from 'prop-types'

const Key = props => (
  <Box bg="lightpink" width={props.size / 3} p={1} {...props}>
    <Button
      color="white"
      bg="DarkSlateGray"
      width={1}
      borderRadius={0}
      fontSize={4}
      onClick={props.onClick}
      data-value={props.value}
    >
      {props.label}
    </Button>
  </Box>
)

export default Key
