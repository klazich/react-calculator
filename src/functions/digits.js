import { is } from './functions'

const canAppendDecimal = digits => !digits.includes('.')
const canAppendZero = digits => !is.zero(digits)

const appendIf = test => char => str => (test(str) ? `${str}${char}` : str)

const appendZero = appendIf(canAppendZero)('0')
const appendDecimal = appendIf(canAppendDecimal)('.')

// if digits is a single digit when backspacing, return 0.
// Otherwise remove the last digit.
const backspaceDigits = digits =>
  digits.length > 1 ? digits.slice(0, -1) : '0'

export const appendToDigits = char => digits => {
  // don't append a decimal when digits includes a decimal
  if (is.decimal(char)) return appendDecimal(digits)
  // don't append a zero when digits is 0
  if (is.zero(char)) return appendZero(digits)

  // special case: No leading zeros - When not appending
  // a decimal when digits is 0, replace with input digit.
  if (is.zero(digits) && !is.decimal(char)) return char

  return `${digits}${char}`
}

// State change functions for 'digits' property

export const updateDigits = digit => state => ({
  ...state,
  digits: is.backspace(digit)
    ? backspaceDigits(state.digits)
    : appendToDigits(digit)(state.digits),
})

export const resetDigits = (init = '0') => state => ({
  ...state,
  digits: init,
})
