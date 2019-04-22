import { is } from '.'

const canAppendDecimal = digits => !digits.includes('.')
const canAppendZero = digits => !is.zero(digits)

// if digits is a single digit when backspacing, return 0.
// Otherwise remove the last digit.
const backspaceDigits = digits =>
  digits.length > 1 ? digits.slice(0, -1) : '0'

export const appendToDigits = digits => char => {
  // don't append a decimal when digits includes a decimal
  if (is.decimal(char) && !canAppendDecimal(digits)) {
    return digits
  }

  // don't append a zero when digits is 0
  if (is.zero(char) && !canAppendZero(digits)) {
    return digits
  }

  // special case: No leading zeros - When not appending
  // a decimal when digits is 0, replace with input digit.
  if (is.zero(digits) && !is.decimal(char)) {
    return char
  }

  return `${digits}${char}`
}

// State change functions for 'digits' property

export const updateDigits = digit => state => ({
  ...state,
  digits: is.backspace(digit)
    ? backspaceDigits(state.digits)
    : appendToDigits(state.digits)(digit),
})

export const resetDigits = (init = '0') => state => ({
  ...state,
  digits: init,
})
