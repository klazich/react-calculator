import {
  APPEND_DIGIT,
  APPEND_DECIMAL,
  APPEND_ZERO,
  BACKSPACE,
  RESET_DIGITS,
} from '../actions/digits'
import { CLEAR } from '../actions'

export function digits(state, action) {
  switch (action.type) {
    case APPEND_DIGIT:
      return state === '0' ? action.digit : `${state}${action.digit}`
    case APPEND_DECIMAL:
      return state.includes('.') ? state : `${state}.`
    case APPEND_ZERO:
      return state === '0' ? state : `${state}0`
    case BACKSPACE:
      return state.length <= 1 ? '0' : state.slice(0, -1)
    case RESET_DIGITS:
    case CLEAR:
      return '0'
    default:
      return state
  }
}
