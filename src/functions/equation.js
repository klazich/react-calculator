import { is } from './functions'

const lastElm = arr => arr[arr.length - 1]

const canAppendOperand = equation =>
  equation.length === 0 || is.operator(lastElm(equation))

const canAppendOperator = equation =>
  equation.length > 0 && !isNaN(lastElm(equation))

const appendIf = test => str => equation =>
  test(equation) ? [...equation, str] : equation

const appendOperand = appendIf(canAppendOperand)
const appendOperator = appendIf(canAppendOperator)

export const updateEquation = str => state => ({
  ...state,
  equation: is.operator(str)
    ? appendOperator(str)(state.equation)
    : appendOperand(str)(state.equation),
})

export const resetEquation = (init = []) => state => ({
  ...state,
  equation: init,
})
