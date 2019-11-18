import { type } from './reducer'

export const accToValue = ({ integer, fraction }) =>
  Number(`${integer || 0}.${fraction}`)

export const accToString = ({ on, integer, fraction }) =>
  on === 'fraction'
    ? `${Number(integer || 0)}.${fraction || 0}`
    : `${Number(integer || 0)}`

const opsFunction = op =>
  ({
    '÷': x => y => x / y,
    '×': x => y => x * y,
    '+': x => y => x + y,
    '-': x => y => x - y,
  }[op])

const evaluateOperation = (operand1, operator, operand2) =>
  opsFunction(operator)(operand1)(operand2)

export const evaluateExpression = arr => {
  if (arr.length === 0) return 0

  const expression = arr.length % 2 !== 0 ? arr : arr.slice(0, -1)
  if (expression.length === 1) return expression[0]

  const highPrecedence = expression.findIndex(v => /^[×÷]$/.test(v))
  const lowPrecedence = expression.findIndex(v => /^[+-]$/.test(v))
  const id = highPrecedence > 0 ? highPrecedence : lowPrecedence

  return evaluateExpression([
    ...expression.slice(0, id - 1),
    evaluateOperation(...expression.slice(id - 1, id + 2)),
    ...expression.slice(id + 2),
  ])
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
