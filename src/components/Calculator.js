import React, { useEffect, useReducer, useMemo } from 'react'

import KeyPad from './KeyPad'
import Display from './Display'

import { is, substituteKey, calculateEquation } from '../helpers'
import { action } from '../state/actions'
import { initialState } from '../state/constants'
import { calculatorReducer } from '../state/reducer'
import { CalculatorDispatch } from './context'

function Calculator() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState)

  const onKeyDown = event => {
    event.preventDefault()
    const key = substituteKey(event.key)
    if (is.key(key)) dispatch(action(key))
  }

  // useEffect hook to capture `keydown` events
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('keydown', onKeyDown, false)
    }
  })

  // probably unnecessary but with useMemo 'acc' is only recalculated when
  // state.equation changes and not with every re-render.
  const calculateAcc = eq => (eq.length < 3 ? 0 : calculateEquation(eq))
  const acc = useMemo(() => calculateAcc(state.equation), [state.equation])
  const show = ['OPERATOR', 'EXECUTE', 'GET_EQUATION'].includes(state.last)
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
