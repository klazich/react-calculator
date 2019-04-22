const operations = {
  '÷': x => y => x / y,
  '×': x => y => x * y,
  '+': x => y => x + y,
  '-': x => y => x - y,
}

const operatorFunction = operator => operations[operator]

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
