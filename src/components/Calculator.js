import React, { useReducer, useEffect } from 'react'

import KeyPad from './KeyPad'
import Screen from './Screen'

import {
  calculator,
  reducer,
  initialState,
  wrapReducer,
} from '../reducers/reducer'
import {
  addDigit,
  addDecimal,
  addZero,
  backspace,
  clear,
  addOperation,
  execute,
  continueAcc,
  addOperand,
} from '../actions'
import { getOperatorFunction, keys, substituteKey } from '../functions'

const isKey = k => keys.includes(k)
const isDigit = k => /[0-9]/.test(k)
const isOperator = k => /[÷×+-]/.test(k)
const isZero = k => k === '0'
const isDecimal = k => k === '.'
const isBackspace = k => k === '⇦'
const isClear = k => k === 'C'
const isExecute = k => k === '='

function Calculator() {
  const [state, dispatch] = useReducer(wrapReducer(calculator), initialState)

  function dispatcher(key) {
    if (isDigit(key)) {
      if (state.last === 'EXECUTE') dispatch(clear())
      dispatch(addDigit(key))
    } else if (isZero(key)) {
      if (state.last === 'EXECUTE') dispatch(clear())
      dispatch(addZero())
    } else if (isDecimal(key)) {
      if (state.last === 'EXECUTE') dispatch(clear())
      dispatch(addDecimal())
    } else if (isOperator(key)) {
      if (state.last === 'EXECUTE') dispatch(continueAcc())
      dispatch(addOperand())
      const fn = getOperatorFunction(key)
      dispatch(addOperation(fn, key))
    } else if (isBackspace(key)) {
      dispatch(backspace())
    } else if (isClear(key)) {
      dispatch(clear())
    } else if (isExecute(key)) {
      dispatch(addOperand())
      dispatch(execute())
    }
  }

  const handleOnKeyDown = event => {
    event.preventDefault()
    const value = substituteKey(event.key)
    if (isKey(value)) {
      dispatcher(value)
    }
  }

  const handleOnClick = event => {
    const value = event.target.dataset.value
    dispatcher(value)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown, false)
    }
  })

  const equation = state.history.length > 0 ? state.history.join(' ') : '0'

  return (
    <main>
      <Screen fontSize={2} css={{ height: 'auto' }}>
        {equation}
      </Screen>
      <Screen>{state.display}</Screen>
      <KeyPad handleOnClick={handleOnClick} />
    </main>
  )
}

export default Calculator
