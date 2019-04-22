import { is } from '.'

const canAppendDecimal = digits => !digits.includes('.')

const canAppendZero = digits => digits !== '0'

const backspaceDigits = digits =>
  digits.length > 1 ? digits.slice(0, -1) : '0'

export const appendToDigits = digits => char => {
  if (
    (is.decimal(char) && !canAppendDecimal(digits)) ||
    (is.zero(char) && !canAppendZero(digits))
  )
    return digits

  if (is.decimal(char) && is.zero(digits)) {
    return '0.'
  }

  return is.zero(digits) ? char : `${digits}${char}`
}

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
