import {
  APPEND_DIGIT,
  APPEND_DIGIT_POST_EXEC,
  BACKSPACE,
  CLEAR,
  UPDATE_ACC,
  UPDATE_ACC_POST_EXEC,
  initialState,
} from './constants'

import { digitInput, backspace, clear, operatorInput } from './actions'
import { appendToDigits, appendToEquation, updateAcc } from './functions'

function reducer(state, action) {
  switch (action.type) {
    case APPEND_DIGIT:
      return {
        ...state,
        digits: appendToDigits(state)(action.digit),
        display: 'digits',
      }
    case APPEND_DIGIT_POST_EXEC:
      return {
        ...state,
        acc: null,
        digits: appendToDigits(state)(action.digit),
        display: 'digits',
      }
    case BACKSPACE:
      return {
        ...state,
        digits: state.digits.length > 1 ? state.digits.slice(0, -1) : '0',
        display: 'digits',
      }
    case CLEAR:
      return initialState
    case UPDATE_ACC:
      return {
        ...state,
        digits: '0',
        acc: updateAcc(state)(action.operator, +digits),
        display: 'digits',
      }
    case UPDATE_ACC_POST_EXEC:
      return {
        ...state,
        digits: '0',
      }
  }
}
