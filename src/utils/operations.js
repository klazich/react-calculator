const makeOpFunction = op => {
  switch (op) {
    case '÷':
      return a => b => a / b
    case '×':
      return a => b => a * b
    case '-':
      return a => b => a - b
    case '+':
      return a => b => a + b
    default:
      throw new Error(`unknown operator "${op}"`)
  }
}

function* OperationsInput() {
  let { x: result, op } = yield
  let fn = makeOpFunction(op)(result)

  while (true) {
    const { x, op } = yield fn

    // if (!op && !x) continue
    // if (!op) return fn(x)

    result = fn(x)
    fn = makeOpFunction(op)(result)
  }
}

export default OperationsInput
