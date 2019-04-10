import React, { useEffect, useReducer } from 'react'
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

import { getOperatorFunction, keys, substituteKey } from '../functions'
import { calculator, initialState, wrapReducer } from '../reducers/index'
import KeyPad from './KeyPad'
import Screen from './Screen'

const isKey = k => keys.includes(k)
const isDigit = k => /[0-9]/.test(k)
const isDecimal = k => k === '.'
const isZero = k => k === '0'
const isBackspace = k => k === '⇦'
const isClear = k => k === 'C'
const isOperator = k => /[÷×+-]/.test(k)
const isExecute = k => k === '='

function Calculator() {
  const [state, dispatch] = useReducer(wrapReducer(calculator), initialState)

  function dispatcher(key) {
    const didExecute = state.last.key === '='

    if (isDigit(key)) {
      return [
        ...(didExecute ? [clear()] : []),
        appendDigit(key),
        setLast(key),
        setDisplay(show.DIGITS),
      ]
    }

    if (isDecimal(key)) {
      return [
        ...(didExecute ? [clear()] : []),
        appendDecimal(),
        setLast(key),
        setDisplay(show.DIGITS),
      ]
    }

    if (isZero(key)) {
      return [
        ...(didExecute ? [clear()] : []),
        appendZero(),
        setLast(key),
        setDisplay(show.DIGITS),
      ]
    }

    if (isBackspace(key)) {
      return [
        ...(didExecute ? [clear()] : []),
        backspace(),
        setLast(key),
        setDisplay(show.DIGITS),
      ]
    }

    if (isClear(key)) {
      return [clear()]
    }

    if (isOperator(key)) {
      const operand = didExecute ? state.ops.acc : parseFloat(state.digits)
      const fn = getOperatorFunction(key)
      const display = didExecute ? show.ACC : show.DIGITS

      return [
        ...(didExecute ? [resetAcc(), resetEquation()] : []),
        resetDigits(),
        addOperand(operand),
        appendOperandToEq(operand),
        addFn(fn),
        appendOperatorToEq(key),
        updateAcc(),
        setLast(key),
        setDisplay(display),
      ]
    }

    if (isExecute(key)) {
      return [
        ...(didExecute
          ? [
              resetEquation(),
              appendOperandToEq(state.ops.acc),
              appendOperatorToEq(state.equation[1]),
            ]
          : []),
        addOperand(parseFloat(state.digits)),
        appendOperandToEq(parseFloat(state.digits)),
        updateAcc(),
        setLast(key),
        setDisplay(show.ACC),
      ]
    }
  }

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

  // const equation = state.history.length > 0 ? state.history.join(' ') : '0'
  const display = state.display === show.DIGITS ? state.digits : state.ops.acc

  return (
    <main>
      <Screen fontSize={2} css={{ height: '3em' }}>
        {state.equation.join(' ')}
      </Screen>
      <Screen>{display}</Screen>
      <KeyPad handleOnClick={handleOnClick} />
    </main>
  )
}

export default Calculator
