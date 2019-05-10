import { is } from './helpers'

const maxLength = 15

const append = ch => str => `${str}${ch}`
const backspace = str => str.slice(0, -1)

const appendChar = char => state =>
  state.length < maxLength ? append(char)(state) : state

const appendNumber = number => state =>
  state !== '0' ? appendChar(number)(state) : number

const appendZero = () => state =>
  state !== '0' ? appendChar('0')(state) : state

const appendDecimal = () => state =>
  !state.includes('.') ? appendChar('.')(state) : state

const backspaceState = () => state =>
  state.length > 1 ? backspace(state) : '0'

export const updateDigitsIfCan = input => {
  if (is.backspace(input)) return backspaceState()
  if (is.zero(input)) return appendZero()
  if (is.decimal(input)) return appendDecimal()
  return appendNumber(input)
}
