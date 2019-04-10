import {
  ADD_OPERAND,
  ADD_FN,
  UPDATE_ACC,
  RESET_ACC,
  RESET_FN,
} from '../actions/ops'
import { CLEAR } from '../actions'

export function ops(state, action) {
  switch (action.type) {
    case ADD_OPERAND:
      return { ...state, operand: action.operand }
    case ADD_FN:
      return { ...state, fn: action.fn }
    case UPDATE_ACC:
      return {
        ...state,
        acc:
          state.acc === null
            ? state.operand
            : // : state.fn === null
              // ? state
              state.fn(state.acc)(state.operand),
      }
    case RESET_ACC:
      return { ...state, acc: null }
    case RESET_FN:
      return { ...state, fn: null }
    case CLEAR:
      return { operand: null, acc: null, fn: null }
    default:
      return state
  }
}
