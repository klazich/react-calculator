import { CLEAR, DIGIT, EXECUTE, OPERATOR, initialState } from './constants'
import {
  resetAcc,
  resetDigits,
  resetNextFn,
  updateAcc,
  updateDigits,
  updateNextFn,
  didJustExecute,
} from './functions'

const stateReducer = state => funcs => funcs.reduce((a, f) => f(a), state)

export function mainReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return stateReducer(state)([updateDigits(action.digit)])
    case OPERATOR:
      return stateReducer(state)([
        updateAcc(+state.digits),
        updateNextFn(action.operator),
        resetDigits(),
      ])
    case EXECUTE:
      return stateReducer(state)([updateAcc(+state.digits), didJustExecute()])
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export function postExecReducer(state, action) {
  switch (action.type) {
    case DIGIT:
      return stateReducer(state)([
        resetAcc(),
        resetDigits(),
        resetNextFn(),
        updateDigits(action.digit),
      ])
    case OPERATOR:
      return stateReducer(state)([resetDigits(), updateNextFn(action.operator)])
    case EXECUTE:
      return stateReducer(state)([didJustExecute()])
    case CLEAR:
      return initialState
    default:
      return state
  }
}

export default function reducer(state, action) {
  const midState = {
    ...state,
    didExecute: false,
  }

  return state.didExecute
    ? postExecReducer(midState, action)
    : mainReducer(midState, action)
}
