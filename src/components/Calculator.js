import React, { createContext, useEffect, useReducer, useMemo } from 'react'

import KeyPad from './KeyPad'
import Display from './Display'

import { is, substituteKey, calculateEquation } from '../functions/functions'
import { action } from '../state/actions'
import reducer from '../state/reducers'
import { initialState } from '../state/constants'

export const CalculatorDispatch = createContext(null)

const logState = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}

function Calculator() {
  const [state, dispatch] = useReducer(logState(reducer), initialState)

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
  const acc = useMemo(() => calculateAcc(state.equation), [state.equation])

  const show = ['OPERATOR', 'EXECUTE'].includes(state.last) ? acc : state.digits

  return (
    <main>
      <Display
        history={state.history}
        equation={state.equation.join(' ')}
        input={show}
      />
      <CalculatorDispatch.Provider value={dispatch}>
        <KeyPad />
      </CalculatorDispatch.Provider>
    </main>
  )
}

export default Calculator
