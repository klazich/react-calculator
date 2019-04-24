import React, { useContext } from 'react'
import { Box, Button as Btn } from 'rebass'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

import { action } from '../../state/actions'
import { CalculatorDispatch } from '../Calculator'

const Button = styled(Btn)`
  font-family: Iosevka Web;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.5);
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
  &:active {
    background: #999;
    transform: scale(0.95);
    /* opacity: 1; */
    /* box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6); */
  }
`

function Key(props) {
  const dispatch = useContext(CalculatorDispatch)

  const { value, size } = props

  return (
    <Box width={size / 4} p={'1px'} {...props}>
      <Button
        borderRadius={0}
        color="white"
        width={1}
        fontSize={5}
        onClick={() => dispatch(action(value))}
      >
        {value}
      </Button>
    </Box>
  )
}

export default Key
