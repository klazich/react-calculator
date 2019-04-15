import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react'
import {
  addFn,
  addOperand,
  appendDecimal,
  appendDigit,
  appendOperandToEq,
  appendOperatorToEq,
  appendZero,
  backspace,
  clear,
  resetAcc,
  resetDigits,
  resetEquation,
  resetFn,
  setDisplay,
  setLast,
  show,
  updateAcc,
} from '../actions'

import { getOpFunction, keys, substituteKey } from '../functions'
import { calculator, initialState, wrapReducer } from '../reducers/index'
import KeyPad from './KeyPad'
import Screen from './Screen'

// GitHub Token: b48fcc15bd60857488b2dd9ae1777b6fa30abb5b
// GitHub Gist: 2b2effbeb53d403f0a11e1994b99c2da
// GitHub Gist Type: Secret

const isKey = k => keys.includes(k)
const isDigit = k => /[0-9]/.test(k)
const isDecimal = k => k === '.'
const isZero = k => k === '0'
const isBackspace = k => k === '⇦'
const isClear = k => k === 'C'
const isOperator = k => /[÷×+-]/.test(k)
const isExecute = k => k === '='

const isDigitsUpdate = k =>
  [isDigit, isDecimal, isZero, isBackspace].every(f(k))

export const CalculatorDispatch = createContext(null)

function Calculator() {
  const [state, dispatch] = useReducer(wrapReducer(calculator), initialState)
  const [didExecute, setDidExecute] = useState(false)
  const [display, setDisplay] = useState('digits')

  const handleOnKeyDown = event => {
    event.preventDefault()
    const value = substituteKey(event.key)
    if (isKey(value)) {
      console.log(dispatcher(value))
      dispatcher(value).forEach(action => dispatch(action))
    }
  }

  const handleOnClick = event => {
    const value = event.target.dataset.value
    console.log(dispatcher(value))
    dispatcher(value).forEach(action => dispatch(action))
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown, false)
    }
  })

  const display = state.display === show.DIGITS ? state.digits : state.ops.acc

  return (
    <main>
      <CalculatorDispatch.Provider value={dispatch}>
        <Screen fontSize={2} css={{ height: '3em' }}>
          {state.equation.join(' ')}
        </Screen>
        <Screen>{display}</Screen>
        <KeyPad handleOnClick={handleOnClick} />
      </CalculatorDispatch.Provider>
    </main>
  )
}

export default Calculator
