import { CLEAR, SET_DISPLAY, SET_LAST, show } from '../actions'

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
  equation: [],
  display: show.DIGITS,
  last: {
    key: null,
    type: null,
  },
}

function display(state, action) {
  switch (action.type) {
    case SET_DISPLAY:
      return state === action.show ? state : action.show
    case CLEAR:
      return show.DIGITS
    default:
      return state
  }
}

function last(state, action) {
  switch (action.type) {
    case SET_LAST:
      return { key: action.key, type: action.type }
    case CLEAR:
      return { key: null, type: null }
    default:
      return state
  }
}

export function calculator(state, action) {
  return {
    digits: digits(state.digits, action),
    ops: ops(state.ops, action),
    equation: equation(state.equation, action),
    display: display(state.display, action),
    last: last(state.last, action),
  }
}

export const wrapReducer = reducer => (state, action) => {
  const newState = reducer(state, action)
  console.log(newState)
  return newState
}
