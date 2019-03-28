import { initGenerator } from '.'

export const makeOpFunction = op => {
  switch (op) {
    case '÷':
      return x => y => x / y
    case '×':
      return x => y => x * y
    case '-':
      return x => y => x - y
    case '+':
      return x => y => x + y
    default:
      throw new Error(`unknown operator "${op}"`)
  }
}

export function* OperationsInput() {
  let { value: result, op } = yield
  let fn = makeOpFunction(op)(result)

  while (true) {
    const { value, op } = yield fn

    if (!op) {
      return fn(value)
    }

    result = fn(value)
    fn = makeOpFunction(op)(result)
  }
}

export const Operations = () => initGenerator(OperationsInput)()

export const makeOperator = generator => (value, op) =>
  generator.next({ value, op }).value

export const Operator = () => makeOperator(Operations())

export default Operator

// testing

const operate = Operator()

operate(11, '-')
operate(2, '+')
operate(6, '÷')
const result = operate(2)

console.log(result)
