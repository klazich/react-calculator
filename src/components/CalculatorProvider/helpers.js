export const accToValue = ({ integer, fraction }) =>
  Number(`${integer || 0}.${fraction}`)

export const accToString = ({ on, integer, fraction }) => {
  if (on === 'fraction') return `${Number(integer || 0)}.${fraction || 0}`
  else return `${Number(integer || 0)}`
}

export const getExpressionFromHistory = (id, expHistory) => expHistory[id]

const opsFunction = op =>
  ({
    '÷': x => y => x / y,
    '×': x => y => x * y,
    '+': x => y => x + y,
    '-': x => y => x - y,
  }[op])

const evaluateOperation = (operand1, operator, operand2) =>
  opsFunction(operator)(operand1)(operand2)

export const evaluateExpression = expression => {
  if (expression.length === 1) return expression[0]
  const highPrecedence = expression.findIndex(v => /[×÷]/.test(v))
  const lowPrecedence = expression.findIndex(v => /[+-]/.test(v))
  const id = highPrecedence > 0 ? highPrecedence : lowPrecedence
  return evaluateExpression([
    ...expression.slice(0, id - 1),
    evaluateOperation(...expression.slice(id - 1, id + 2)),
    ...expression.slice(id + 2),
  ])
}
