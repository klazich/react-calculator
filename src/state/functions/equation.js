import { is } from '../../helpers'

const initialState = []

const append = x => arr => [...arr, x]

const appendOperand = operand => state =>
  state.length % 2 === 0 ? append(operand)(state) : state

const appendOperator = operator => state =>
  state.length % 2 !== 0 ? append(operator)(state) : state

const updateEquationIfCan = input =>
  is.operator(input) ? appendOperator(input) : appendOperand(input)

/**
 * Functions for updating or resetting the 'equation' state property.
 */

export const updateEquation = input => state => ({
  ...state,
  equation: updateEquationIfCan(input)(state.equation),
})

export const resetEquation = (init = initialState) => state => ({
  ...state,
  equation: init,
})
