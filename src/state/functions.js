import { divide, multiply, subtract, add, format as mathFormat } from 'mathjs'

export const format = value => mathFormat(+value, { precision: 14 })

// prettier-ignore
export const keys = [
  'C', '⇦', '%', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
]

export const is = {
  key: k => keys.includes(k),
  digit: k => /[0-9⇦.]/.test(k),
  zero: k => k === '0',
  backspace: k => k === '⇦',
  decimal: k => k === '.',
  clear: k => k === 'C',
  operator: k => /[÷×+-]/.test(k),
  execute: k => k === '=',
}

export const substituteKey = key => {
  const alt = ['/', '*', 'Escape', 'Backspace', 'Enter']
  const sub = ['÷', '×', 'C', '⇦', '=']
  return alt.includes(key) ? sub[alt.indexOf(key)] : key
}

// DidExecute functions

export const didJustExecute = () => state => ({
  ...state,
  didExecute: true,
})

// Digits functions

const canAppendDecimal = digits => !digits.includes('.')
const canAppendZero = digits => digits !== '0'

const backspaceDigits = digits =>
  digits.length > 1 ? digits.slice(0, -1) : '0'

const appendToDigits = digits => char => {
  if (
    (is.decimal(char) && !canAppendDecimal(digits)) ||
    (is.zero(char) && !canAppendZero(digits))
  )
    return digits

  return is.zero(digits) ? char : `${digits}${char}`
}

export const updateDigits = digit => state => ({
  ...state,
  digits: is.backspace(digit)
    ? backspaceDigits(state.digits)
    : appendToDigits(state.digits)(digit),
})

export const resetDigits = (init = '0') => state => ({
  ...state,
  digits: init,
})

// Operand, operator and accumulator functions

const operatorFunction = operator => {
  switch (operator) {
    case '÷':
      return x => y => divide(x, y)
    case '×':
      return x => y => multiply(x, y)
    case '-':
      return x => y => subtract(x, y)
    case '+':
      return x => y => add(x, y)
    default:
      throw new Error(`unknown operator "${operator}"`)
  }
}

const doIfState = test => func => state => (test(state) ? func(state) : state)

export const updateAcc = operand => state => ({
  ...state,
  acc: state.nextFn(operand),
})

export const resetAcc = (init = null) => state => ({
  ...state,
  acc: init,
})

export const updateNextFn = operator => state => ({
  ...state,
  nextFn: operatorFunction(operator)(state.acc),
})

export const resetNextFn = (init = x => x) => state => ({
  ...state,
  nextFn: init,
})

// Equation history functions

// const canAppendOperand = equation =>
//   equation.length === 0 || is.operator(equation[equation.length - 1])
// const canAppendOperator = equation =>
//   equation.length > 0 && !isNaN(equation[equation.length - 1])

// const appendIf = test => equation => str =>
//   test(equation) ? [...equation, str] : equation

// const appendOperand = equation => operand =>
//   appendIf(canAppendOperand)(equation)(operand)
// const appendOperator = equation => operator =>
//   appendIf(canAppendOperator)(equation)(operator)

// export const updateEquation = ({ equation }) => str =>
//   is.operator(str)
//     ? appendOperator(equation)(str)
//     : appendOperand(equation)(str)
