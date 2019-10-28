import { updateHistory, useEquation } from './history'
import { updateDigits, resetDigits } from './digits'
import { updateEquation, resetEquation } from './equation'
import { calculateEquation } from '../../helpers'

/**
 * Functions for updating or resetting the 'didExecute' state property.
 */

export const didJustExecute = () => state => ({
  ...state,
  didExecute: true,
})

export const didNotJustExecute = () => state => ({
  ...state,
  didExecute: false,
})

const pipe = (...fns) => x => fns.reduce((a, f) => f(a), x)

// Instructions for digit, decimal or backspace calculator inputs (↤, ., 0, 1, 2, 3, 4, 5, 6, 7, 8, 9).

export const inputDigit = digit => state =>
  !state.didExecute
    ? pipe(updateDigits(digit))(state)
    : pipe(
        resetEquation(),
        updateDigits(digit),
        didNotJustExecute()
      )(state)

// Instructions for operator calculator inputs (÷, ×, -, +).

export const inputOperator = operator => state =>
  !state.didExecute
    ? pipe(
        updateEquation(+state.digits),
        updateEquation(operator),
        resetDigits()
      )(state)
    : pipe(
        resetEquation(),
        updateEquation(calculateEquation(state.equation)),
        updateEquation(operator),
        didNotJustExecute()
      )(state)

// Instructions for equal calculator input (=).

export const inputExecute = () => state =>
  !state.didExecute
    ? pipe(
        updateEquation(+state.digits),
        updateHistory(),
        resetDigits(),
        didJustExecute()
      )(state)
    : pipe(didJustExecute())(state)

// Instructions when an equation is clicked in the history pane.

export const clickEquation = id => state =>
  pipe(
    resetDigits(),
    useEquation(id)
  )(state)
