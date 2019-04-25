import { CLEAR, DIGIT, EXECUTE, OPERATOR } from './constants'
import { is } from '../functions/functions'

export const clear = () => ({
  type: CLEAR,
})

export const digit = digit => ({
  type: DIGIT,
  digit,
})

export const execute = () => ({
  type: EXECUTE,
})

export const operator = operator => ({
  type: OPERATOR,
  operator,
})

export const action = key => {
  if (is.clear(key)) return clear()
  if (is.execute(key)) return execute()
  if (is.digit(key)) return digit(key)
  if (is.operator(key)) return operator(key)
  return { type: null }
}
