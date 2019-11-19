import { type } from './reducer'

// returns the value (as Number) of the `acc` state property
export const accToValue = ({ integer, fraction }) =>
  Number(`${integer || 0}.${fraction}`)

// returns the value (as String) of the `acc` state property
export const accToString = ({ on, integer, fraction }) =>
  on === 'fraction'
    ? `${Number(integer || 0)}.${fraction || ''}`
    : `${Number(integer || 0)}`

// returns the correct operation function given the operator symbol
const opsFunction = op =>
  ({
    '÷': x => y => x / y,
    '×': x => y => x * y,
    '+': x => y => x + y,
    '-': x => y => x - y,
  }[op])

// evaluates an operation given 2 operands and 1 operator
const evaluateOperation = (operand1, operator, operand2) =>
  opsFunction(operator)(operand1)(operand2)

// recursively evaluates an expression, as an array of tokens, fallowing
// correct order of precedence
export const evaluateExpression = arr => {
  // if no tokens, return 0
  if (arr.length === 0) return 0

  // trim trailing operators
  const expression = arr.length % 2 !== 0 ? arr : arr.slice(0, -1)
  // if only a single token is left, return that token, evaluation complete
  if (expression.length === 1) return expression[0]

  // get the index of the first occurring operator, higher precedence first
  const highPrecedence = expression.findIndex(v => /^[×÷]$/.test(v))
  const lowPrecedence = expression.findIndex(v => /^[+-]$/.test(v))
  const id = highPrecedence > 0 ? highPrecedence : lowPrecedence

  // substituting the operation tokens at id with evaluation, recursively call
  // function with tokens
  return evaluateExpression([
    ...expression.slice(0, id - 1),
    evaluateOperation(...expression.slice(id - 1, id + 2)),
    ...expression.slice(id + 2),
  ])
}

// return action abject given input value
export const action = value => {
  if (/[0-9]/.test(value)) return { type: type.NUMBER, payload: { value } }
  if (value === '.') return { type: type.DECIMAL }
  if (value === '↤') return { type: type.BACK }
  if (/[÷×+-]/.test(value)) return { type: type.OPERATOR, payload: { value } }
  if (value === '=') return { type: type.EXECUTE }
  if (value === 'C') return { type: type.CLEAR }
  return { type: null }
}
