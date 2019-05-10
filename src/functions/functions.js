import { updateDigitsIfCan } from './digits'
import { updateEquationIfCan } from './equation'
import { addEquation, getEqFromHistory } from './history'

// state change functions for 'digits' property

export const updateDigits = input => state => ({
  ...state,
  digits: updateDigitsIfCan(input)(state.digits),
})

export const resetDigits = (init = '0') => state => ({
  ...state,
  digits: init,
})

// state change functions for 'equation' property

export const updateEquation = input => state => ({
  ...state,
  equation: updateEquationIfCan(input)(state.equation),
})

export const resetEquation = (init = []) => state => ({
  ...state,
  equation: init,
})

// state change functions for 'history' property

export const updateHistory = () => state => ({
  ...state,
  history: addEquation(state.equation)(state.history),
})

export const useEquation = id => state => ({
  ...state,
  equation: getEqFromHistory(id)(state.history),
})

// state change functions for 'didExecute' and 'last' property

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
