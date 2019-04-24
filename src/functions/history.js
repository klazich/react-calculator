const addEquation = equation => history => [
  ...history.slice(1, 5),
  equation.join(' '),
]

export const updateHistory = () => state => ({
  ...state,
  history: addEquation(state.equation)(state.history),
})

export const resetHistory = (init = Array(5).fill('')) => state => ({
  ...state,
  history: init,
})
