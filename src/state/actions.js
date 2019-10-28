import { CLEAR, DIGIT, EXECUTE, OPERATOR, GET_EQUATION } from './constants'
import { is } from '../helpers'

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

export const equation = id => ({
  type: GET_EQUATION,
  id,
})

export const action = key => {
  if (is.clear(key)) return clear()
  if (is.execute(key)) return execute()
  if (is.digit(key)) return digit(key)
  if (is.operator(key)) return operator(key)
  return { type: null }
}
