import { doDigitsUpdate, initialState as initDigits } from './digits'
import { doEquationUpdate, initialState as initEquation } from './equation'
import { addEquation, getEqFromHistory } from './history'

const updateProp = (prop, fn) => input => state => ({
  ...state,
  [prop]: fn(input)(state[prop]),
})

const resetProp = (prop, init) => input => state => ({
  ...state,
  [prop]: input || init,
})

/**
 * Functions for updating or resetting the 'digits' state property.
 */

export const updateDigits = updateProp('digits', doDigitsUpdate)
export const resetDigits = resetProp('digits', initDigits)

/**
 * Functions for updating or resetting the 'equation' state property.
 */

export const updateEquation = updateProp('equation', doEquationUpdate)
export const resetEquation = resetProp('equation', initEquation)

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

/**
 * Functions for updating or resetting the 'didExecute' and 'last'
 * state property.
 */

export const didJustExecute = () => state => ({
  ...state,
  didExecute: true,
})

export const didNotJustExecute = () => state => ({
  ...state,
  didExecute: false,
})

export const updateLast = type => state => ({
  ...state,
  last: type,
})
