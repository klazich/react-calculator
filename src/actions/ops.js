export const ADD_OPERAND = 'ADD_OPERAND'
export const ADD_FN = 'UPDATE_FN'
export const UPDATE_ACC = 'UPDATE_ACC'
export const RESET_ACC = 'RESET_ACC'
export const RESET_FN = 'RESET_FN'

export const addOperand = operand => ({
  type: ADD_OPERAND,
  operand,
})

export const addFn = fn => ({
  type: ADD_FN,
  fn,
})

export const updateAcc = () => ({
  type: UPDATE_ACC,
})

export const resetAcc = () => ({
  type: RESET_ACC,
})

export const resetFn = () => ({
  type: RESET_FN,
})
