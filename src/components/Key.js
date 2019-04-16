import React, { useContext } from 'react'
import { Box, Button } from 'rebass'
// import PropTypes from 'prop-types'

import { action } from '../state/actions'
import { CalculatorDispatch } from './Calculator'

function Key(props) {
  const dispatch = useContext(CalculatorDispatch)

  const { value, size } = props

  return (
    <Box bg="lightpink" width={size / 4} p={1} {...props}>
      <Button
        color="white"
        bg="DarkSlateGray"
        width={1}
        borderRadius={0}
        fontSize={4}
        onClick={() => dispatch(action(value))}
      >
        {value}
      </Button>
    </Box>
  )
}

export default Key
