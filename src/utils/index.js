import { divide, multiply, subtract, add } from 'mathjs'

import InputDigits from './digits'
import InputOperations from './operations'

export const initGenerator = generator => (...args) => {
  const iter = generator(...args)
  iter.next()
  return iter
}

export const getOperatorFunction = op => {
  switch (op) {
    case '÷':
      return x => y => divide(x, y)
    case '×':
      return x => y => multiply(x, y)
    case '-':
      return x => y => subtract(x, y)
    case '+':
      return x => y => add(x, y)
    default:
      throw new Error(`unknown operator "${op}"`)
  }
}

export const Digits = init => initGenerator(InputDigits)(init)
export const Operations = () => initGenerator(InputOperations)()

export const getDigits = ({ digits }) => digits.next().value
export const getEquation = ({ operations }) => operations.next().value
