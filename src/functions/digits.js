import { is } from './functions'

const maxDigits = 15

const append = char => str => `${str}${char}`
const backspace = str => str.slice(0, -1)

const isMaxDigits = str => str.length >= maxDigits
const lessThanMaxDigits = str => !isMaxDigits(str)
const moreThanOneDigit = str => str.length > 1
const noDecimals = str => !str.includes('.')

const canAppendDecimal = str => lessThanMaxDigits(str) && noDecimals(str)
const backspaceOrZero = str => (moreThanOneDigit(str) ? backspace(str) : '0')

const doUpdateDigits = char => str => {
  if (is.backspace(char)) return backspaceOrZero(str)
  if (is.decimal(char)) return canAppendDecimal(str) ? append('.')(str) : str
  if (is.zero(str) && !is.decimal(char)) return char
  if (isMaxDigits(str)) return str

  return append(char)(str)
}

// state change functions for 'digits' property

export const updateDigits = input => state => ({
  ...state,
  digits: doUpdateDigits(input)(state.digits),
})

export const resetDigits = (init = '0') => state => ({
  ...state,
  digits: init,
})
