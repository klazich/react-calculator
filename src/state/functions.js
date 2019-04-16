import { divide, multiply, subtract, add, format as mathFormat } from 'mathjs'

export const format = value => mathFormat(+value, { precision: 14 })

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

// Digits functions

const canAppendDecimal = digits => !digits.includes('.')
const canAppendZero = digits => digits !== '0'
const appendCharToDigits = digits => char =>
  digits === '0' ? char : `${digits}${char}`

export const appendToDigits = ({ digits }) => char => {
  if (
    (char === '.' && !canAppendDecimal(digits)) ||
    (char === '0' && canAppendZero(digits))
  ) {
    return digits
  }
  return appendCharToDigits(digits)(char)
}

// Operand, operator and accumulator functions

const getOpFunction = op => {
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

const canOperate = acc => acc !== null

export const updateAcc = ({ acc }) => (operator, operand) =>
  canOperate(acc) ? getOpFunction(operator)(acc)(operand) : acc

// Equation history functions

const isOperator = v => /[÷×+-]/.test(v)
const canAppendOperand = equation =>
  equation.length === 0 ||
  ['÷', '×', '+', '-'].includes(equation[equation.length - 1])
const canAppendOperator = equation =>
  equation.length > 0 && !isNaN(equation[equation.length - 1])
const appendIf = test => equation => str =>
  test(equation) ? [...equation, str] : equation
const appendOperand = equation => operand =>
  appendIf(canAppendOperand)(equation)(operand)
const appendOperator = equation => operator =>
  appendIf(canAppendOperator)(equation)(operator)

export const appendToEquation = ({ equation }) => str =>
  isOperator(str) ? appendOperator(equation)(str) : appendOperand(equation)(str)
