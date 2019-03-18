import React, { useReducer } from 'react'
import * as math from 'mathjs'

import KeyPad from './KeyPad'
import Screen from './Screen'

const { divide, multiply, subtract, add } = math

const pf = parseFloat

const format = value => math.format(value, 14)

// https://blog.usejournal.com/everything-react-first-app-188b33a880ca

const appendValue = value => digit =>
  digit === '.' && /\./.test(`${value}`)
    ? value
    : digit === '0' && value === ''
    ? value
    : `${value}${digit}`

const initialState = { value: '', stack: [], result: 0 }

function reducer(state, action) {
  const { value, stack, result } = state
  const { type } = action
  const append = appendValue(value)

  console.log(value, stack)

  switch (type) {
    case '0':
      return { ...state, value: append('0') }
    case '1':
      return { ...state, value: append('1') }
    case '2':
      return { ...state, value: append('2') }
    case '3':
      return { ...state, value: append('3') }
    case '4':
      return { ...state, value: append('4') }
    case '5':
      return { ...state, value: append('5') }
    case '6':
      return { ...state, value: append('6') }
    case '7':
      return { ...state, value: append('7') }
    case '8':
      return { ...state, value: append('8') }
    case '9':
      return { ...state, value: append('9') }
    case '.':
      return { ...state, value: append('.') }
    case '÷':
      return { ...state, value: '', stack: [...stack, pf(value), divide] }
    case '×':
      return { ...state, value: '', stack: [...stack, pf(value), multiply] }
    case '-':
      return { ...state, value: '', stack: [...stack, pf(value), subtract] }
    case '+':
      return { ...state, value: '', stack: [...stack, pf(value), add] }
    case '⇦':
      return { ...state, value: `${value}`.slice(0, -1) || '' }
    case 'C':
      return initialState
    case '=':
      if (stack.length < 2) return state
      let s = [...stack, pf(value)]
      while (s.length > 2) {
        const [x, op, y, ...rest] = s
        s = [op(x, y), ...rest]
      }
      return { value: `${s[0]}`, stack: [], result: s[0] }
    default:
      throw new Error(`Type: "${type}" is unknown`)
  }
}

function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleOnKey = type => dispatch({ type })

  return (
    <main>
      <Screen fontSize={6} css={{ height: 'auto' }}>
        {format(state.result)}
      </Screen>
      <Screen>{state.value}</Screen>
      <KeyPad onKey={v => handleOnKey(v)} />
    </main>
  )
}

export default Calculator
