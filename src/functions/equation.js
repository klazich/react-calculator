const appendToEquation = input => equation => [...equation, input]

export const updateEquation = input => state => ({
  ...state,
  equation: appendToEquation(input)(state.equation),
})

export const resetEquation = (init = []) => state => ({
  ...state,
  equation: init,
})
