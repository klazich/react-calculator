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

export const action = value => {
  if (/[0-9]/.test(value)) return { type: type.NUMBER, payload: { value } }
  if (value === '.') return { type: type.DECIMAL }
  if (value === '↤') return { type: type.BACK }
  if (/[÷×+-]/.test(value)) return { type: type.OPERATOR, payload: { value } }
  if (value === '=') return { type: type.EXECUTE }
  if (value === 'C') return { type: type.CLEAR }
  return { type: null }
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
  const { acc } = state
  return {
    ...state,
    acc: {
      ...acc,
      [acc.on]: `${acc[acc.on]}${value}`,
    },
    result: null,
  }
}

const handleDecimalInput = () => state => {
  const { acc } = state
  return {
    ...state,
    acc: {
      ...acc,
      on: 'fraction',
    },
    result: null,
  }
}

const handleBackInput = () => state => {
  const { acc } = state
  return {
    ...state,
    acc: {
      on: acc.on === 'fraction' && acc.fraction === '' ? 'integer' : acc.on,
      [acc.on]: acc[acc.on].slice(0, -1),
    },
    result: null,
  }
}

const handleOperatorInput = ({ value }) => state => {
  const { acc, expression, result } = state
  return {
    ...state,
    acc: expression.length % 2 === 0 ? initialState.acc : acc,
    expression:
      expression.length % 2 === 0
        ? [...expression, result || accToValue(acc), value]
        : [...expression.slice(0, -1), value],
    result: null,
  }
}

const handleExecuteInput = () => state => {
  const { acc, expression, expHistory, result } = state
  return {
    ...state,
    acc: initialState.acc,
    expression: initialState.expression,
    expHistory: [...expHistory.slice(1), expression],
    result: evaluateExpression([...expression, result || accToValue(acc)]),
  }
}

const handleClickEquationInput = ({ value }) => state => {
  const { expHistory } = state
  const newExpression = getExpressionFromHistory(value, expHistory)
  return {
    ...state,
    acc: initialState.acc,
    expression: newExpression,
    result: evaluateExpression(newExpression),
  }
}

export const reducer = (state, action) => {
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
