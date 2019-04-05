import {
  ADD_DECIMAL,
  ADD_DIGIT,
  ADD_ZERO,
  BACKSPACE,
  ADD_OPERAND,
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

export default digits
