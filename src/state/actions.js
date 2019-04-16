import {
  APPEND_DIGIT,
  APPEND_DIGIT_POST_EXEC,
  BACKSPACE,
  CLEAR,
  UPDATE_ACC,
  UPDATE_ACC_POST_EXEC,
} from './constants'

export const digitInput = ({ didExecute }) => digit => ({
  type: didExecute ? APPEND_DIGIT_POST_EXEC : APPEND_DIGIT,
  digit,
})

export const backspace = () => ({
  type: BACKSPACE,
})

export const clear = () => ({
  type: CLEAR,
})

export const operatorInput = ({ didExecute }) => operator => ({
  type: didExecute ? UPDATE_ACC_POST_EXEC : UPDATE_ACC,
  operator,
})
