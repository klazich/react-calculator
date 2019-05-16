const addEquation = equation => state => [...state.slice(1, 5), equation]

const getEqFromHistory = id => state => state[id]

/**
 * Functions for updating or resetting the 'history' state property.
 */

export const updateHistory = () => state => ({
  ...state,
  history: addEquation(state.equation)(state.history),
})

export const useEquation = input => state => ({
  ...state,
  equation: getEqFromHistory(input)(state.history),
})
