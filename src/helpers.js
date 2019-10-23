/* prettier-ignore */
export const keys = [
  'C', '↤', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
]

export const is = {
  key: k => keys.includes(k),
  digit: k => /^[0-9↤.]$/.test(k),
  zero: k => k === '0',
  backspace: k => k === '↤',
  decimal: k => k === '.',
  clear: k => k === 'C',
  operator: k => /^[÷×+-]$/.test(k),
  execute: k => k === '=',
}

export const substituteKey = key => {
  const alt = ['/', '*', 'Escape', 'Backspace', 'Enter']
  const sub = ['÷', '×', 'C', '↤', '=']
  return alt.includes(key) ? sub[alt.indexOf(key)] : key
}

const operations = {
  '÷': x => y => x / y,
  '×': x => y => x * y,
  '+': x => y => x + y,
  '-': x => y => x - y,
}

const operatorFunction = operator => operations[operator]

const doOperation = ([acc, operator, operand]) =>
  operatorFunction(operator)(acc)(operand)

export const calculateEquation = ([acc, ...equation]) =>
  equation.reduce(
    (a, c) => (a.length < 2 ? [...a, c] : [doOperation([...a, c])]),
    [acc]
  )[0]
