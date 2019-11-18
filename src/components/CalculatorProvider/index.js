import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'

import { calculatorReducer, initialState } from './reducer'

export { type } from './reducer'
export { action, accToString } from './helpers'

export const CalculatorContext = createContext()

export const CalculatorProvider = props => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  return (
    <CalculatorContext.Provider
      value={{
        state,
        dispatch,
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
