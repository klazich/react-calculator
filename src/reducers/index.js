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

const append = a => b => `${a}${b}`

export function digits({ digits, acc }, action) {
  const { type } = action

  switch (type) {
    case ADD_DECIMAL:
      return digits.includes('.') ? digits : append(digits)('.')
    case ADD_ZERO:
      return digits === '0' ? digits : append(digits)('0')
    case ADD_DIGIT:
      return digits === '0' ? action.digit : append(digits)(action.digit)
    case BACKSPACE:
      return digits.length === 1 ? '0' : digits.slice(0, -1)
    case ADD_OPERAND:
    case EXECUTE:
      return '0'
    case CONTINUE_ACC:
      return `${acc}`
    default:
      return digits
  }
}

export function history({ history, digits }, action) {
  const { type } = action

  switch (type) {
    case ADD_OPERAND:
      return [...history, digits]
    case ADD_OPERATION:
      return [...history, action.character]
    case CLEAR:
    case CONTINUE_ACC:
      return []
    default:
      return history
  }
}

export function last(_state, action) {
  return action.type
}

export function acc({ digits, fn, acc }, action) {
  const { type } = action

  switch (type) {
    case ADD_OPERAND:
      return !fn ? parseFloat(digits) : fn(acc)(parseFloat(digits))
    case CONTINUE_ACC:
    default:
      return acc
  }
}
