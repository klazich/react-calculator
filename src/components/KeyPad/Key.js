import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'rebass'

import { action } from '../../state/actions'
import { CalculatorDispatch } from '../context'

/* background: rgba(0, 0, 0, 0.5); */
/* box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6); */

const Key = ({ value, size }) => {
  const dispatch = useContext(CalculatorDispatch)

  return (
    <Box width={size / 4}>
      <Button
        sx={{
          borderRadius: 0,
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
        bg="rgba(0, 0, 0, 0.4)"
        color="#f6f6ff"
        width={1}
        onClick={() => dispatch(action(value))}
      >
        <Text variant="keyType">{value}</Text>
      </Button>
    </Box>
  )
}

Key.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}

export default Key
