function* InputOperations() {
  let input = yield
  while (!input) input = yield

  let { operand: result, fn } = input
  let equation = fn(result)

  while (true) {
    input = yield equation

    if (!input) continue

    const { operand, fn } = input

    result = equation(operand)
    equation = fn(result)
  }
}

export default InputOperations
