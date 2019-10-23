import { updateHistory, useEquation } from './history'
import { updateDigits, resetDigits } from './digits'
import { updateEquation, resetEquation } from './equation'
import { calculateEquation } from '../../helpers'

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

/**
 * How the calculator handles state changes for different inputs.
 */

const pipe = (...fns) => x => fns.reduce((a, f) => f(a), x)

// Instructions for digit, decimal or backspace calculator inputs.
// ↤, ., 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

export const inputDigit = digit => state => pipe(updateDigits(digit))(state)

export const inputDigitPostExec = digit => state =>
  pipe(
    resetEquation(),
    updateDigits(digit)
  )(state)

// Instructions for operator calculator inputs.
// ÷, ×, -, +

export const inputOperator = operator => state =>
  pipe(
    updateEquation(+state.digits),
    updateEquation(operator),
    resetDigits()
  )(state)

export const inputOperatorPostExec = operator => state =>
  pipe(
    resetEquation(),
    updateEquation(calculateEquation(state.equation)),
    updateEquation(operator)
  )(state)

// Instructions for equal calculator input.
// =

export const inputExecute = () => state =>
  pipe(
    updateEquation(+state.digits),
    updateHistory(),
    resetDigits(),
    didJustExecute()
  )(state)

export const inputExecutePostExec = () => state => pipe(didJustExecute())(state)

// Instructions when an equation is clicked in the history pane.

export const clickEquation = id => state =>
  pipe(
    resetDigits(),
    useEquation(id)
  )(state)

// partial state changes before all

export const midStateChange = last => state =>
  pipe(
    didNotJustExecute(),
    updateLast(last)
  )(state)
