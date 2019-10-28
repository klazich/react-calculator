import {
  CLEAR,
  DIGIT,
  EXECUTE,
  OPERATOR,
  GET_EQUATION,
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
import { logState } from '../helpers'

function normalReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return inputDigit(action.digit)(state)
    case OPERATOR:
      return inputOperator(action.operator)(state)
    case EXECUTE:
      return inputExecute()(state)
    case GET_EQUATION:
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
    case GET_EQUATION:
      return clickEquation(action.id)(state)
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export function reducer(state, action) {
  const shouldSkip =
    [OPERATOR, EXECUTE].includes(state.last) && action.type === state.last

  if (shouldSkip) return state

  const midState = midStateChange(action.type)(state)

  return state.didExecute
    ? postExecReducer(midState, action)
    : normalReducer(midState, action)
}

export const calculatorReducer =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development' ? logState(reducer) : reducer
