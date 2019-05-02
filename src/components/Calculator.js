import React, { createContext, useEffect, useReducer, useMemo } from 'react'

import KeyPad from './KeyPad'
import Display from './Display'

import { is, substituteKey, calculateEquation } from '../functions/functions'
import { action } from '../state/actions'
import calculatorReducer from '../state/reducers'
import { initialState } from '../state/constants'

export const CalculatorDispatch = createContext(null)

const logState = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}

const reducer =
  process.env.NODE_ENV === 'development'
    ? logState(calculatorReducer)
    : calculatorReducer

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // useEffect hook to capture `keydown` events
  useEffect(() => {
    const onKeyDown = event => {
      event.preventDefault()

      const key = substituteKey(event.key)
      if (is.key(key)) dispatch(action(key))
    }

    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  })

  const calculateAcc = eq => (eq.length < 3 ? 0 : calculateEquation(eq))
  // probably unnecessary but with useMemo 'acc' is only recalculated when
  // state.equation changes and not with every re-render.
  const acc = useMemo(() => calculateAcc(state.equation), [state.equation])

  const show = ['OPERATOR', 'EXECUTE', 'USE_EQUATION'].includes(state.last)
    ? acc
    : state.digits

  return (
    <main>
      <CalculatorDispatch.Provider value={dispatch}>
        <Display
          history={state.history}
          equation={state.equation}
          input={show}
        />
        <KeyPad />
      </CalculatorDispatch.Provider>
    </main>
  )
}

export default Calculator
