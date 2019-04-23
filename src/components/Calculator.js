import React, { createContext, useEffect, useReducer } from 'react'

import KeyPad from './KeyPad'
import Screen from './Screen'

import { is, substituteKey } from '../functions'
import { action } from '../state/actions'
import reducer from '../state/reducers'
import { initialState } from '../state/constants'

export const CalculatorDispatch = createContext(null)

const logReducer = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}

function Calculator() {
  const [state, dispatch] = useReducer(logReducer(reducer), initialState)

  useEffect(() => {
    const onKeyDown = event => {
      event.preventDefault()

      const key = substituteKey(event.key)
      if (is.key(key)) {
        dispatch(action(key))
      }
    }

    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  })

  const display = ['OPERATOR', 'EXECUTE'].includes(state.last)
    ? state.acc
    : state.digits

  return (
    <main>
      <Screen fontSize={2}>{state.equation.join(' ') || '_'}</Screen>
      <Screen>{display}</Screen>
      <CalculatorDispatch.Provider value={dispatch}>
        <KeyPad />
      </CalculatorDispatch.Provider>
    </main>
  )
}

export default Calculator
