import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import { calculatorReducer, initialState } from './reducer'
import { accToString } from './helpers'

export { type } from './reducer'
export { action } from './helpers'

export const CalculatorContext = createContext()

export const CalculatorProvider = props => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)
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
