import { divide, multiply, subtract, add, format as mathFormat } from 'mathjs'

export const format = value => mathFormat(+value, { precision: 14 })

export const getOperatorFunction = op => {
  switch (op) {
    case '÷':
      return x => y => divide(x, y)
    case '×':
      return x => y => multiply(x, y)
    case '-':
      return x => y => subtract(x, y)
    case '+':
      return x => y => add(x, y)
    default:
      throw new Error(`unknown operator "${op}"`)
  }
}

export const keys = [
  'C',
  '⇦',
  '%',
  '÷',
  '7',
  '8',
  '9',
  '×',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
]

export const substituteKey = key => {
  const alt = ['/', '*', 'Escape', 'Backspace', 'Enter']
  const sub = ['÷', '×', 'C', '⇦', '=']
  return alt.includes(key) ? sub[alt.indexOf(key)] : key
}
