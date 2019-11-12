import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import { reducer, initialState } from './reducer'
import { accToString } from './helpers'

export { action, type } from './reducer'

export const CalculatorContext = createContext()

export const CalculatorProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { acc, result } = state

  const display = result || accToString(acc)

  return (
    <CalculatorContext.Provider
      value={{
        state,
        dispatch,
        display,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  )
}

CalculatorProvider.propTypes = {
  children: PropTypes.node,
}

export default CalculatorProvider
