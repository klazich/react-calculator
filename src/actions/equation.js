export const APPEND_OPERAND_TO_EQ = 'APPEND_OPERAND_TO_EQ'
export const APPEND_OPERATOR_TO_EQ = 'APPEND_OPERATOR_TO_EQ'
export const RESET_EQUATION = 'RESET_EQUATION'

export const appendOperandToEq = operand => ({
  type: APPEND_OPERAND_TO_EQ,
  operand,
})

export const appendOperatorToEq = operator => ({
  type: APPEND_OPERATOR_TO_EQ,
  operator,
})

export const resetEquation = () => ({
  type: RESET_EQUATION,
})
