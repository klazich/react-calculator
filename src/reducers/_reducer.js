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
} from '../actions'

export const initialState = {
  digits: '0',
  fn: null,
  acc: 0,
  display: '0',
  history: [],
  last: null,
}

const computeAcc = ({ digits, acc, fn }) => fn(acc)(parseFloat(digits))
const appendToHistory = ({ history }) => (...args) => [...history, ...args]

const append = a => b => `${a}${b}`

export function init(initArgs) {
  return { ...initArgs }
}

export function reducer(state, action) {
  const { last } = state
  const { type } = action

  switch (type) {
    case APPEND_DECIMAL: {
      const { digits } = last === 'EXECUTE' ? initialState : state

      const newDigits = digits.includes('.') ? digits : append(digits)('.')

      return {
        ...(last === 'EXECUTE' ? initialState : state),
        last: type,
        digits: newDigits,
        display: newDigits,
      }
    }

    case APPEND_ZERO: {
      const { digits } = last === 'EXECUTE' ? initialState : state

      const newDigits = digits === '0' ? digits : append(digits)('0')

      return {
        ...(last === 'EXECUTE' ? initialState : state),
        last: type,
        digits: newDigits,
        display: newDigits,
      }
    }

    case APPEND_DIGIT: {
      const { digits } = last === 'EXECUTE' ? initialState : state
      const { digit } = action

      const newDigits = digits === '0' ? digit : append(digits)(digit)

      return {
        ...(last === 'EXECUTE' ? initialState : state),
        last: type,
        digits: newDigits,
        display: newDigits,
      }
    }

    case BACKSPACE: {
      const digits = last === 'EXECUTE' ? `${state.acc}` : state.digits

      const newDigits = digits.length === 1 ? '0' : digits.slice(0, -1)

      return {
        ...(last === 'EXECUTE' ? initialState : state),
        last: type,
        digits: newDigits,
        display: newDigits,
      }
    }

    case CLEAR: {
      return initialState
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
