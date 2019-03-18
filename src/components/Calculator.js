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

const initialState = { value: '0', stack: [], result: 0 }

function reducer(state, action) {
  const { value, stack, result } = state
  const { type } = action
  const append = appendValue(value)

  console.log(value, stack)

  if (/[0-9.]/.test(type)) return { ...state, value: append(type) }

  switch (type) {
    case '÷':
      return { ...state, value: '0', stack: [...stack, pf(value), divide] }
    case '×':
      return { ...state, value: '0', stack: [...stack, pf(value), multiply] }
    case '-':
      return { ...state, value: '0', stack: [...stack, pf(value), subtract] }
    case '+':
      return { ...state, value: '0', stack: [...stack, pf(value), add] }
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
      <Screen>{format(math.eval(state.value))}</Screen>
      <KeyPad onKey={v => handleOnKey(v)} />
    </main>
  )
}

export default Calculator
