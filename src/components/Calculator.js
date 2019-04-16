import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useReducer,
} from 'react'

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

const isDigitsUpdate = k =>
  [isDigit, isDecimal, isZero, isBackspace].every(f(k))

export const CalculatorDispatch = createContext(null)

function Calculator() {
  const [state, dispatch] = useReducer(wrapReducer(calculator), initialState)
  const [didExecute, setDidExecute] = useState(false)

  const handleOnKeyDown = event => {
    event.preventDefault()
    const value = substituteKey(event.key)
    if (isKey(value)) {
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
