import {
  APPEND_OPERAND_TO_EQ,
  APPEND_OPERATOR_TO_EQ,
  RESET_EQUATION,
} from '../actions/equation'
import { CLEAR } from '../actions'

export function equation(state, action) {
  switch (action.type) {
    case APPEND_OPERAND_TO_EQ:
      return [...state, action.operand]
    case APPEND_OPERATOR_TO_EQ:
      return [...state, action.operator]
    case RESET_EQUATION:
    case CLEAR:
      return []
    default:
      return state
  }
}
