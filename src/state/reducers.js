import { CLEAR, DIGIT, EXECUTE, OPERATOR, initialState } from './constants'
import {
  resetAcc,
  resetDigits,
  resetNextFn,
  updateAcc,
  updateDigits,
  updateNextFn,
  didJustExecute,
  updateEquation,
  resetEquation,
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
        updateEquation(state.digits),
        updateEquation(`${action.operator}`),
        resetDigits(),
      ])
    case EXECUTE:
      return stateReducer(state)([
        updateAcc(+state.digits),
        updateEquation(state.digits),
        updateEquation('='),
        resetDigits(),
        didJustExecute(),
      ])
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
        resetEquation(),
        updateDigits(action.digit),
      ])
    case OPERATOR:
      return stateReducer(state)([
        resetDigits(),
        resetEquation(),
        updateEquation(`${state.acc}`),
        updateEquation(`${action.operator}`),
        updateNextFn(action.operator),
      ])
    case EXECUTE:
      return stateReducer(state)([didJustExecute()])
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

  const midState = {
    ...state,
    didExecute: false,
    last: action.type,
  }

  return state.didExecute
    ? postExecReducer(midState, action)
    : mainReducer(midState, action)
}
