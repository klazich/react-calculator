import { is } from './functions'

const append = x => arr => [...arr, x]
const appendIf = test => x => arr => (test(arr) ? append(x)(arr) : arr)

const canAppendOperand = equation => equation.length % 2 === 0
const canAppendOperator = equation => equation.length % 2 !== 0

const appendOperand = appendIf(canAppendOperand)
const appendOperator = appendIf(canAppendOperator)

const appendToEquationIfCan = input =>
  is.operator(input) ? appendOperator(input) : appendOperand(input)

const getEqFromHistory = id => history => history[id]

// state change functions for 'equation' property

export const updateEquation = input => state => ({
  ...state,
  equation: appendToEquationIfCan(input)(state.equation),
})

export const useEquation = id => state => ({
  ...state,
  equation: getEqFromHistory(id)(state.history),
})

export const resetEquation = (init = []) => state => ({
  ...state,
  equation: init,
})
