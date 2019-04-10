import {
  APPEND_DECIMAL,
  APPEND_DIGIT,
  ADD_FIRST_OPERATION,
  ADD_OPERATION,
  ADD_OP_AFTER_EXEC,
  APPEND_ZERO,
  BACKSPACE,
  CLEAR,
  EXECUTE,
  RESET_DIGITS,
  UPDATE_ACC,
  ADD_OPERAND,
  ADD_FN,
} from '../actions'

import { digits } from './digits'
import { ops } from './ops'
import { equation } from './equation'

export const initialState = {
  digits: '0',
  ops: {
    operand: null,
    acc: null,
    fn: null,
  },
  history: [],
  last: null,
  display: 'SHOW_DIGITS',
}

export function init(initArgs) {
  return { ...initArgs }
}

const appendDigitToDigits = ({ digits }, digit) =>
  digits === '0' ? `${digit}` : `${digits}${digit}`
const appendDecimalToDigits = ({ digits }) =>
  digits.includes('.') ? digits : `${digits}.`
const appendZeroToDigits = ({ digits }) =>
  digits === '0' ? `${digits}` : `${digits}0`
const removeLastDigitFromDigits = ({ digits }) =>
  digits.length <= 1 ? '0' : digits.slice(0, -1)
const computeNewAcc = ({ digits, acc, fn }) => fn(acc)(parseFloat(digits))

export function reducer(state, action) {
  const { type } = action

  state = { ...state, last: action.type }

  switch (type) {
    case APPEND_DIGIT:
      return {
        ...state,
        digits: appendDigitToDigits(state, action.digit),
        // display: newDigits,
      }

    case APPEND_DECIMAL:
      return {
        ...state,
        digits: appendDecimalToDigits(state),
        // display: newDigits,
      }

    case APPEND_ZERO:
      return {
        ...state,
        digits: appendZeroToDigits(state),
        // display: newDigits,
      }

    case BACKSPACE:
      return {
        ...state,
        digits: removeLastDigitFromDigits(state),
        // display: newDigits,
      }

    case CLEAR: {
      return initialState
    }

    case RESET_DIGITS:
      return {
        ...state,
        digits: initialState.digits,
      }

    case ADD_OPERAND:
      return {
        ...state,
        operand: parseFloat(state.digits),
      }

    case UPDATE_ACC:
      return {
        ...state,
        operand: null,
        acc: state.fn(state.acc)(state.operand),
      }

    case ADD_FN:
      return {
        ...state,
        fn: action.fn,
      }

    case ADD_FIRST_OPERATION: {
      const { digits, history } = state
      const { operator, character } = action

      const newDigits = '0'
      const newFn = operator
      const newAcc = parseFloat(digits)
      const newDisplay = digits
      const newHistory = [...history, digits, character]

      return {
        ...state,
        last: type,
        digits: newDigits,
        fn: newFn,
        acc: newAcc,
        display: newDisplay,
        history: newHistory,
      }
    }

    case ADD_OPERATION: {
      const { digits, history } = state
      const { operator, character } = action

      const newDigits = '0'
      const newFn = operator
      const newAcc = computeAcc(state)
      const newDisplay = `${computeAcc(state)}`
      const newHistory = [...history, digits, character]

      return {
        ...state,
        last: type,
        digits: '0',
        fn: newFn,
        acc: newAcc,
        display: `${computeAcc(state)}`,
        history: appendToHistory(state)(digits, character),
      }
    }

    case ADD_OP_AFTER_EXEC: {
      const { acc } = state
      const { operator, character } = action

      const newDigits = '0'
      const newFn = operator
      const newDisplay = `${acc}`
      const newHistory = [acc, character]

      return {
        ...state,
        last: type,
        digits: newDigits,
        fn: newFn,
        display: newDisplay,
        history: newHistory,
      }
    }

    case EXECUTE: {
      const { digits, fn, history } = state

      return !fn || last === 'EXECUTE'
        ? {
            ...state,
            last: type,
          }
        : {
            ...state,
            last: type,
            digits: '0',
            acc: computeAcc(state),
            display: `${computeAcc(state)}`,
            history: appendToHistory(state)(digits),
          }
    }

    default: {
      return state
    }
  }
}

export const wrapReducer = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}
