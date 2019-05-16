import { is } from '../../helpers'

const initialState = '0'
const maxLength = 15

const backspace = str => str.slice(0, -1)
const append = ch => str => `${str}${ch}`

const backspaceState = () => state =>
  state.length > 1 ? backspace(state) : '0'

const appendAny = char => state =>
  state.length < maxLength ? append(char)(state) : state

const appendNumber = number => state =>
  state !== '0' ? appendAny(number)(state) : number

const appendZero = () => state =>
  state !== '0' ? appendAny('0')(state) : state

const appendDecimal = () => state =>
  !state.includes('.') ? appendAny('.')(state) : state

const updateDigitsIfCan = input => {
  if (is.backspace(input)) return backspaceState()
  if (is.zero(input)) return appendZero()
  if (is.decimal(input)) return appendDecimal()
  return appendNumber(input)
}

/**
 * Functions for updating or resetting the 'digits' state property.
 */

export const updateDigits = input => state => ({
  ...state,
  digits: updateDigitsIfCan(input)(state.digits),
})

export const resetDigits = (init = initialState) => state => ({
  ...state,
  digits: init,
})
