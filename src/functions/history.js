export const addEquation = equation => history => [
  ...history.slice(1, 5),
  equation,
]

export const getEqFromHistory = id => history => history[id]
