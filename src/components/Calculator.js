import React, { createContext, useEffect, useReducer } from 'react'

import KeyPad from './KeyPad'
import Screen from './Screen'

import { is, substituteKey } from '../state/functions'
import { action } from '../state/actions'
import reducer from '../state/reducers'
import { initialState } from '../state/constants'

export const CalculatorDispatch = createContext(null)

const wrap = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}

function Calculator() {
  const [state, dispatch] = useReducer(wrap(reducer), initialState)

  const handleOnKeyDown = event => {
    event.preventDefault()

    const key = substituteKey(event.key)
    if (is.key(key)) {
      dispatch(action(key))
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown, false)
    }
  })

  return (
    <main>
      <CalculatorDispatch.Provider value={dispatch}>
        <Screen fontSize={2} css={{ height: '3em' }}>
          {state.acc}
        </Screen>
        <Screen>{state.digits}</Screen>
        <KeyPad />
      </CalculatorDispatch.Provider>
    </main>
  )
}

export default Calculator
