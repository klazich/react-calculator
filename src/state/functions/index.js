import { updateHistory, useEquation } from './history'
import { updateDigits, resetDigits } from './digits'
import { updateEquation, resetEquation } from './equation'
import { calculateEquation } from '../../helpers'
import { type } from 'os'

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

/**
 * The state object
 * @typedef {Object} State
 * @prop {string} digits - The input digits
 * @prop {string} didExecute - True if the last input was '='
 * @prop {(number|string)[]} equation - The accumulated operand and operator inputs to be solved
 * @prop {State['equation'][]} history - Previously solved equations
 * @prop {string|null} last - The action previously dispatched
 */
/**
 * State updater
 * @typedef {function} StateUpdate
 * @param {State} state - The current state object
 * @returns {State} The new state object
 */

// Instructions for digit, decimal or backspace calculator inputs. ↤, ., 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

/**
 * @param {string} digit - The input value of the pressed digit key
 * @return {(state: State) => State} A function that takes a state object and returns a new state
 */
export const inputDigit = digit => state =>
  pipe(
    updateDigits(digit) // update the state property 'digits' with 'digit'
  )(state)

/**
 * @param {string} digit - The input value of the pressed digit key
 * @return {(state: State) => State} A function that takes a state object and returns a new state
 */
export const inputDigitPostExec = digit => state =>
  pipe(
    resetEquation(),
    updateDigits(digit)
  )(state)

// Instructions for operator calculator inputs. ÷, ×, -, +

/**
 * @param {string} operator - The input value of the pressed operator key
 * @returns {(state: State) => State} A function that takes a state object and returns a new state
 */
export const inputOperator = operator => state =>
  pipe(
    updateEquation(+state.digits),
    updateEquation(operator),
    resetDigits()
  )(state)

/**
 * @param {string} operator - The input value of the pressed operator key
 * @return {(state: State) => State} A function that takes a state object and returns a new state
 */
export const inputOperatorPostExec = operator => state =>
  pipe(
    resetEquation(),
    updateEquation(calculateEquation(state.equation)),
    updateEquation(operator)
  )(state)

// Instructions for equal calculator input. =

/**
 * @return {(state: State) => State} A function that takes a state object and returns a new state
 */
export const inputExecute = () => state =>
  pipe(
    updateEquation(+state.digits),
    updateHistory(),
    resetDigits(),
    didJustExecute()
  )(state)

/**
 * @return {(state: State) => State} A function that takes a state object and returns a new state
 */
export const inputExecutePostExec = () => state =>
  pipe(
    didJustExecute() //
  )(state)

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
