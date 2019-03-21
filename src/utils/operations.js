import { initGenerator, value as v } from '.'

const state = (op, value) => ({ op, value })

export const makeOpFunction = op => v => {
  switch (op) {
    case '÷':
      return x => v / x
    case '×':
      return x => v * x
    case '-':
      return x => v - x
    case '+':
      return x => v + x
    default:
      throw new Error(`unknown operator "${op}"`)
  }
}

export function* OperationsInput() {
  let opStack = []

  while (true) {
    const { op, value } = yield x => opStack.reduce((a, f) => f(a), x)

    const fn = makeOpFunction(op)(value)
    opStack = [fn, ...opStack]

    console.log(opStack.map(f => f(1)))
  }
}

const Operations = () => initGenerator(OperationsInput)()

export default Operations

const op1 = Operations()

let eq = op1.next(state('-', 33)).value
// console.log(eq(1))
eq = op1.next(state('+', 30)).value
console.log(eq(2))
