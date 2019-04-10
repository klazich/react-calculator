export const CLEAR = 'CLEAR'
export const SET_DISPLAY = 'SET_DISPLAY'
export const SET_LAST = 'SET_LAST'

export const show = {
  ACC: 'ACC',
  DIGITS: 'DIGITS',
}

export const clear = () => ({
  type: CLEAR,
})

export const setDisplay = show => ({
  type: SET_DISPLAY,
  show,
})

export const setLast = key => ({
  type: SET_LAST,
  key,
})

export {
  APPEND_DECIMAL,
  APPEND_DIGIT,
  APPEND_ZERO,
  BACKSPACE,
  RESET_DIGITS,
  appendDecimal,
  appendDigit,
  appendZero,
  backspace,
  resetDigits,
} from './digits'

export {
  APPEND_OPERAND_TO_EQ,
  APPEND_OPERATOR_TO_EQ,
  RESET_EQUATION,
  appendOperandToEq,
  appendOperatorToEq,
  resetEquation,
} from './equation'

export {
  ADD_FN,
  ADD_OPERAND,
  RESET_ACC,
  RESET_FN,
  UPDATE_ACC,
  addFn,
  addOperand,
  resetAcc,
  resetFn,
  updateAcc,
} from './ops'
