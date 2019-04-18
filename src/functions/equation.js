import { is } from '.'

const canAppendOperand = equation =>
  equation.length === 0 ||
  is.operator(equation[equation.length - 1]) ||
  is.execute(equation[equation.length - 1])
const canAppendOperator = equation =>
  equation.length > 0 && !isNaN(equation[equation.length - 1])

const appendIf = test => equation => str =>
  test(equation) ? [...equation, str] : equation

const appendOperand = equation => operand =>
  appendIf(canAppendOperand)(equation)(operand)
const appendOperator = equation => operator =>
  appendIf(canAppendOperator)(equation)(operator)

export const updateEquation = str => state => ({
  ...state,
  equation:
    is.operator(str) || is.execute(str)
      ? appendOperator(state.equation)(str)
      : appendOperand(state.equation)(str),
})

export const resetEquation = (init = []) => state => ({
  ...state,
  equation: init,
})
