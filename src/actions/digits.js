export const APPEND_DIGIT = 'APPEND_DIGIT'
export const APPEND_DECIMAL = 'APPEND_DECIMAL'
export const APPEND_ZERO = 'APPEND_ZERO'
export const BACKSPACE = 'BACKSPACE'
export const RESET_DIGITS = 'RESET_DIGITS'

export const appendDigit = digit => ({
  type: APPEND_DIGIT,
  digit,
})

export const appendDecimal = () => ({
  type: APPEND_DECIMAL,
})

export const appendZero = () => ({
  type: APPEND_ZERO,
})

export const backspace = () => ({
  type: BACKSPACE,
})

export const resetDigits = () => ({
  type: RESET_DIGITS,
})
