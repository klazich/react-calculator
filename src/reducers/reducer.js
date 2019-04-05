import {
  CLEAR,
  ADD_OPERAND,
  ADD_OPERATION,
  EXECUTE,
  CONTINUE_ACC,
} from '../actions'

import { digits } from './digits'
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

export function reducer(state, action) {
  const { type } = action

  switch (type) {
    case CLEAR:
      return initialState

    case ADD_OPERAND:
      return !state.fn
        ? {
            ...state,
            acc: parseFloat(state.digits),
            display: state.digits,
          }
        : {
            ...state,
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
            display: `${state.acc}`,
          }

    case CONTINUE_ACC:
      return {
        ...state,
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
