export const APPEND_DIGIT = 'APPEND_DIGIT'
export const APPEND_DIGIT_POST_EXEC = 'APPEND_DIGIT_POST_EXEC'
export const BACKSPACE = 'BACKSPACE'
export const CLEAR = 'CLEAR'
export const UPDATE_ACC_FIRST_TIME = 'UPDATE_ACC_FIRST_TIME'
export const UPDATE_ACC_POST_EXEC = 'UPDATE_ACC_POST_EXEC'
export const UPDATE_ACC = 'UPDATE_ACC'

export const initialState = {
  digits: '0',
  acc: null,
  didExecute: false,
  display: 'digits',
}
