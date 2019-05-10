import { is } from './helpers'

const append = x => arr => [...arr, x]

const appendOperand = operand => state =>
  state.length % 2 === 0 ? append(operand)(state) : state

const appendOperator = operator => state =>
  state.length % 2 !== 0 ? append(operator)(state) : state

export const updateEquationIfCan = input =>
  is.operator(input) ? appendOperator(input) : appendOperand(input)
