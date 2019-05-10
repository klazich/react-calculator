import { calculateEquation } from './helpers'
import {
  updateDigits,
  resetDigits,
  updateEquation,
  useEquation,
  resetEquation,
  updateHistory,
  didJustExecute,
  didNotJustExecute,
  updateLast,
} from './functions'

const pipe = (...fns) => x => fns.reduce((a, f) => f(a), x)

// input digit or backspace

export const inputDigit = digit => state => pipe(updateDigits(digit))(state)

export const inputDigitPostExec = digit => state =>
  pipe(
    resetEquation(),
    updateDigits(digit)
  )(state)

// input operator

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

// input equal (exec)

export const inputExecute = () => state =>
  pipe(
    updateEquation(+state.digits),
    updateHistory(),
    resetDigits(),
    didJustExecute()
  )(state)

export const inputExecutePostExec = () => state => pipe(didJustExecute())(state)

// click history equation

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
