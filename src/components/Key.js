import React, { useContext } from 'react'
import { Box, Button } from 'rebass'
// import PropTypes from 'prop-types'

import { CalculatorDispatch } from './Calculator'

const Key = props => {
  const dispatch = useContext(CalculatorDispatch)

  return (
    <Box bg="lightpink" width={props.size / 4} p={1} {...props}>
      <Button
        color="white"
        bg="DarkSlateGray"
        width={1}
        borderRadius={0}
        fontSize={4}
        onClick={props.handleOnClick}
        data-value={props.value}
      >
        {props.value}
      </Button>
    </Box>
  )
}

export default Key
