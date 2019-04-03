import { Digits, Operations, getDigits, getEquation } from '../utils'

export const substituteKey = key => {
  const alt = ['/', '*', 'Escape', 'Backspace', 'Enter']
  const sub = ['÷', '×', 'C', '⇦', '=']
  return alt.includes(key) ? sub[alt.indexOf(key)] : key
}

export const canExecute = state => Boolean(getEquation(state))

export const addDigit = state => d => {
  state.digits.next(d)

  return { ...state }
}

export const subDigit = state => () => ({
  ...state,
  digits: Digits(getDigits(state).slice(0, -1)) || '0',
})

export const clearDigits = state => () => ({
  ...state,
  result: 0,
  digits: Digits(),
})

export const addOperation = state => fn => {
  state.operations.next({ operand: getDigits(state), fn })

  return {
    ...state,
    digits: Digits(),
  }
}

export const solveOperations = state => () => {
  const equation = getEquation(state)
  const digitStr = getDigits(state)
  const newResult = equation(digitStr)

  return {
    ...state,
    result: newResult,
    digits: Digits(newResult),
    operations: Operations(),
  }
}

export const getHistory = ({ history }) => history

export const updateHistory = state => value => {
  const { history } = state
  const newHistory = [...history, value]

  return {
    ...state,
    history: newHistory,
  }
}
