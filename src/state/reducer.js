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
  inputExecute,
  inputOperator,
  clickEquation,
} from './functions'

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

const reducer = (state, action) =>
  state.last === EXECUTE && action.type === EXECUTE
    ? state
    : {
        ...normalReducer(state, action),
        last: action.type,
      }

const logState = reducer => (state, action) => {
  const newState = reducer(state, action)
  // eslint-disable-next-line no-undef
  console.log(newState)
  return newState
}

export const calculatorReducer =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development' ? logState(reducer) : reducer
