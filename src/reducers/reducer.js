import {
  ADD_DIGIT,
  ADD_DECIMAL,
  ADD_ZERO,
  BACKSPACE,
  CLEAR,
  ADD_OPERAND,
  ADD_OPERATION,
  EXECUTE,
  CONTINUE_ACC,
} from '../actions'

// import { digits } from './digits'
import { history, last } from '.'

const computeAcc = ({ digits, acc, fn }) => fn(acc)(parseFloat(digits))

export const initialState = {
  digits: '0',
  fn: null,
  acc: 0,
  display: '',
  history: [],
  last: null,
}

const append = a => b => `${a}${b}`

export function reducer(state, action) {
  const { type } = action

  switch (type) {
    case ADD_DIGIT:
      const { digits } = state
      return {
        ...state,
        digits: digits.includes('.') ? digits : append(digits)('.'),
      }

    case ADD_ZERO:
      const { digits } = state
      return {
        ...state,
        digits: digits === '0' ? digits : append(digits)('0'),
      }

    case ADD_DIGIT:
      const { digits } = state
      return {
        ...state,
        digits: digits === '0' ? action.digit : append(digits)(action.digit),
      }

    case BACKSPACE:
      const { digits } = state
      return {
        ...state,
        digits: digits.length === 1 ? '0' : digits.slice(0, -1),
      }

    case CLEAR:
      return initialState

    case ADD_OPERAND:
      return !state.fn
        ? {
            ...state,
            digits: '0',
            acc: parseFloat(state.digits),
            display: state.digits,
          }
        : {
            ...state,
            digits: '0',
            acc: computeAcc(state),
            display: `${computeAcc(state)}`,
          }

    case ADD_OPERATION:
      return {
        ...state,
        fn: action.operator,
      }

    case EXECUTE:
      return !state.fn
        ? state
        : {
            ...state,
            digits: '0',
            display: `${state.acc}`,
          }

    case CONTINUE_ACC:
      return {
        ...state,
        digits: state.acc,
        fn: null,
      }

    default:
      return state
  }
}

export const wrapReducer = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}

export function calculator(state, action) {
  return {
    ...reducer(state, action),
    digits: digits(state, action),
    history: history(state, action),
    last: last(state, action),
  }
}
