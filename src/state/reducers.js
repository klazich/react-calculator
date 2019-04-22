import { CLEAR, DIGIT, EXECUTE, OPERATOR, initialState } from './constants'
import {
  inputDigit,
  inputDigitPostExec,
  inputExecute,
  inputExecutePostExec,
  inputOperator,
  inputOperatorPostExec,
  midStateChange,
} from './functions'

export function mainReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return inputDigit(state)(action.digit)
    case OPERATOR:
      return inputOperator(state)(action.operator)
    case EXECUTE:
      return inputExecute(state)()
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export function postExecReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return inputDigitPostExec(state)(action.digit)
    case OPERATOR:
      return inputOperatorPostExec(state)(action.operator)
    case EXECUTE:
      return inputExecutePostExec(state)()
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export default function reducer(state, action) {
  if (state.last !== DIGIT && action.type === state.last) {
    return state
  }

  const midState = midStateChange(state)(action.type)

  return state.didExecute
    ? postExecReducer(midState, action)
    : mainReducer(midState, action)
}
