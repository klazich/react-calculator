export const ADD_DIGIT = 'ADD_DIGIT'
export const ADD_DECIMAL = 'ADD_DECIMAL'
export const ADD_ZERO = 'ADD_ZERO'
export const BACKSPACE = 'BACKSPACE'
export const CLEAR = 'CLEAR'
export const ADD_OPERAND = 'ADD_OPERAND'
export const ADD_OPERATION = 'ADD_OPERATION'
export const EXECUTE = 'EXECUTE'
export const CONTINUE_ACC = 'CONTINUE_ACC'

export const addDigit = digit => ({
  type: ADD_DIGIT,
  digit,
})

export const addDecimal = () => ({
  type: ADD_DECIMAL,
})

export const addZero = () => ({
  type: ADD_ZERO,
})

export const backspace = () => ({
  type: BACKSPACE,
})

export const clear = () => ({
  type: CLEAR,
})

export const addOperand = () => ({
  type: ADD_OPERAND,
})

export const addOperation = (operator, character) => ({
  type: ADD_OPERATION,
  operator,
  character,
})

export const execute = () => ({
  type: EXECUTE,
})

export const continueAcc = () => ({
  type: CONTINUE_ACC,
})
