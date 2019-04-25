import React, { useContext } from 'react'
import { Box, Button, Text } from 'rebass'
// import PropTypes from 'prop-types'

import { action } from '../../state/actions'
import { CalculatorDispatch } from '../Calculator'

/* background: rgba(0, 0, 0, 0.5); */
/* box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6); */

function Key({ value, size }) {
  const dispatch = useContext(CalculatorDispatch)

  return (
    <Box width={size / 4} p={'1px'}>
      <Button
        bg="rgba(0, 0, 0, 0.5)"
        color="white"
        borderRadius={0}
        width={1}
        onClick={() => dispatch(action(value))}
        css={{
          outline: 'none',
          opacity: 0.8,
          transition: 'opacity 0.2s ease-in-out',
          '&:hover': {
            opacity: 1,
          },
          '&:active': {
            background: '#999',
            transform: 'scale(0.95)',
          },
        }}
      >
        <Text fontFamily="Iosevka Web" fontSize={5} fontWeight={300}>
          {value}
        </Text>
      </Button>
    </Box>
  )
}

export default Key
