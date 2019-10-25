import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Screen from './Screen'

import { equation } from '../../state/actions'
import { CalculatorDispatch } from '../context'

function Row({ children, id }) {
  const dispatch = useContext(CalculatorDispatch)

  return (
    <Screen
      sx={{
        cursor: 'pointer',
        height: '26px',
        overflow: 'hidden',
        textOverflow: 'clip',
        transition: 'color 0.2s ease-in-out',
        '&:hover': {
          color: 'DimGray',
        },
      }}
      px={2}
      py={1}
      width={1}
      color="DarkGray"
      onClick={() => dispatch(equation(id))}
    >
      {children}
    </Screen>
  )
}

Row.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default Row
