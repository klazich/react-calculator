import {
  CLEAR,
  DIGIT,
  EXECUTE,
  OPERATOR,
  USE_EQUATION,
  initialState,
} from './constants'
import {
  inputDigit,
  inputDigitPostExec,
  inputExecute,
  inputExecutePostExec,
  inputOperator,
  inputOperatorPostExec,
  clickEquation,
  midStateChange,
} from './functions'

function normalReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return inputDigit(action.digit)(state)
    case OPERATOR:
      return inputOperator(action.operator)(state)
    case EXECUTE:
      return inputExecute()(state)
    case USE_EQUATION:
      return clickEquation(action.id)(state)
    case CLEAR:
      return initialState
    default:
      return state
  }
}

function postExecReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return inputDigitPostExec(action.digit)(state)
    case OPERATOR:
      return inputOperatorPostExec(action.operator)(state)
    case EXECUTE:
      return inputExecutePostExec()(state)
    case USE_EQUATION:
      return clickEquation(action.id)(state)
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export function calculatorReducer(state, action) {
  const shouldSkip =
    [OPERATOR, EXECUTE].includes(state.last) && action.type === state.last

  if (shouldSkip) return state

  const midState = midStateChange(action.type)(state)

  return state.didExecute
    ? postExecReducer(midState, action)
    : normalReducer(midState, action)
}
