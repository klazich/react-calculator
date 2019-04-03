import React, { useReducer, useEffect } from 'react'
import { format as mathFormat } from 'mathjs'

import KeyPad from './KeyPad'
import Screen from './Screen'

import { getOperatorFunction, Digits, Operations, getDigits } from '../utils'
import {
  substituteKey,
  canExecute,
  addDigit,
  subDigit,
  addOperation,
  clearDigits,
  solveOperations,
} from './functions'

const format = value => mathFormat(+value, { precision: 14 })

const keys = [
  'C',
  '⇦',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
]

const isKey = k => keys.includes(k)
const isDigit = k => /[0-9.]/.test(k)
const isOperator = k => /[÷×+-]/.test(k)
const isBackspace = k => k === '⇦'
const isClear = k => k === 'C'
const isExecute = k => k === '='

const createAction = key => {
  if (isDigit(key)) {
    return { type: 'DIGIT', value: key }
  } else if (isOperator(key)) {
    return { type: 'OPERATOR', value: getOperatorFunction(key) }
  } else if (isBackspace(key)) {
    return { type: 'BACKSPACE' }
  } else if (isClear(key)) {
    return { type: 'CLEAR' }
  } else if (isExecute(key)) {
    return { type: 'EXECUTE' }
  }
}

const initialState = () => ({
  last: null,
  result: 0,
  digits: Digits(),
  operations: Operations(),
})

function reducer(state, action) {
  const { last } = state
  const { type, value } = action

  if (last === 'EXECUTE' && type === 'DIGIT') {
    const newState = initialState()
    return reducer(newState, action)
  }

  const makeState = last => props => ({ ...props, last })

  switch (type) {
    case 'DIGIT':
      return makeState(type)(addDigit(state)(value))
    case 'OPERATOR':
      return makeState(type)(addOperation(state)(value))
    case 'BACKSPACE':
      return makeState(type)(subDigit(state)())
    case 'CLEAR':
      return makeState(type)(clearDigits(state)())
    case 'EXECUTE':
      return canExecute(state)
        ? makeState(type)(solveOperations(state)())
        : makeState(type)(state)
    default:
      throw new Error(`Type: "${type}" is unknown`)
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState())

  console.log(state)

  const handleOnKeyDown = event => {
    event.preventDefault()
    const value = substituteKey(event.key)
    if (isKey(value)) {
      dispatch(createAction(value))
    }
  }

  const handleOnClick = event => {
    const value = event.target.dataset.value
    dispatch(createAction(value))
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeyDown, false)
    return () => {
      document.removeEventListener('keydown', handleOnKeyDown, false)
    }
  })

  const displayValue = getDigits(state)

  return (
    <main>
      <Screen fontSize={4} css={{ height: 'auto' }}>
        {format(state.result)}
      </Screen>
      <Screen>{displayValue}</Screen>
      <KeyPad handleOnClick={handleOnClick} />
    </main>
  )
}

export default Calculator
