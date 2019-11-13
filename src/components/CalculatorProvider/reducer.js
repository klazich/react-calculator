import {
  accToValue,
  getExpressionFromHistory,
  evaluateExpression,
} from './helpers'

export const type = {
  NUMBER: 'NUMBER',
  DECIMAL: 'DECIMAL',
  BACK: 'BACK',
  OPERATOR: 'OPERATOR',
  EXECUTE: 'EXECUTE',
  CLICK_EQUATION: 'CLICK_EQUATION',
  CLEAR: 'CLEAR',
}

export const initialState = {
  acc: {
    on: 'integer',
    integer: '',
    fraction: '',
  },
  expression: [],
  expHistory: Array.from({ length: 5 }, () => []),
  result: null,
}

const handleNumberInput = ({ value }) => state => {
  const { acc, expression } = state
  const nextAcc = { ...acc, [acc.on]: `${acc[acc.on]}${value}` }
  return {
    ...state,
    acc: nextAcc,
    expression:
      expression.length % 2 === 0
        ? [...expression, accToValue(nextAcc)]
        : [...expression.slice(0, -1), accToValue(nextAcc)],
    result: null,
  }
}

const handleDecimalInput = () => state => {
  const { acc, expression } = state
  const nextAcc = { ...acc, on: 'fraction' }
  return {
    ...state,
    acc: nextAcc,
    expression:
      expression.length % 2 === 0
        ? [...expression, accToValue(nextAcc)]
        : [...expression.slice(0, -1), accToValue(nextAcc)],
    result: null,
  }
}

const handleBackInput = () => state => {
  const { acc, expression } = state
  const nextAcc = {
    ...acc,
    on: acc.on === 'fraction' && acc.fraction === '' ? 'integer' : acc.on,
    [acc.on]: acc[acc.on].slice(0, -1),
  }
  return {
    ...state,
    acc: nextAcc,
    expression:
      expression.length % 2 === 0
        ? [...expression, accToValue(nextAcc)]
        : [...expression.slice(0, -1), accToValue(nextAcc)],
    result: null,
  }
}

const handleOperatorInput = ({ value }) => state => {
  const { expression } = state
  return {
    ...state,
    acc: initialState.acc,
    expression:
      expression.length % 2 !== 0 ? [...expression, value] : expression,
    result: null,
  }
}

const handleExecuteInput = () => state => {
  const { expression, expHistory } = state
  return expression.length === 0
    ? state
    : {
        ...state,
        acc: initialState.acc,
        expression: [evaluateExpression(expression)],
        expHistory: [...expHistory.slice(1), expression],
        result: evaluateExpression(expression),
      }
}

const handleClickEquationInput = ({ value }) => state => {
  const { expHistory } = state
  const nextExpression = getExpressionFromHistory(value, expHistory)
  return {
    ...state,
    acc: initialState.acc,
    expression: nextExpression,
    result: evaluateExpression(nextExpression),
  }
}

const reducer = (state, action) => {
  switch (action.type) {
    case type.NUMBER:
      return handleNumberInput(action.payload)(state)
    case type.DECIMAL:
      return handleDecimalInput()(state)
    case type.BACK:
      return handleBackInput()(state)
    case type.OPERATOR:
      return handleOperatorInput(action.payload)(state)
    case type.EXECUTE:
      return handleExecuteInput()(state)
    case type.CLICK_EQUATION:
      return handleClickEquationInput(action.payload)(state)
    case type.CLEAR:
      return initialState
    default:
      return state
  }
}

const logState = reducer => (state, action) => {
  const nextState = reducer(state, action)
  // eslint-disable-next-line no-undef
  console.log(action.type)
  // eslint-disable-next-line no-undef
  console.log(nextState)
  return nextState
}

export const calculatorReducer =
  // eslint-disable-next-line no-undef
  process.env.NODE_ENV === 'development' ? logState(reducer) : reducer
