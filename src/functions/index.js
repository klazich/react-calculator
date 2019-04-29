import {
  didJustExecute,
  didNotJustExecute,
  updateLast,
  calculateEquation,
} from './functions'
import { updateDigits, resetDigits } from './digits'
import { updateEquation, resetEquation } from './equation'
import { updateHistory } from './history'

const pipe = (...fns) => x => fns.reduce((a, f) => f(a), x)

export const inputDigit = digit => state => pipe(updateDigits(digit))(state)

export const inputDigitPostExec = digit => state =>
  pipe(
    updateHistory(),
    resetEquation(),
    updateDigits(digit)
  )(state)

export const inputOperator = operator => state =>
  pipe(
    updateEquation(+state.digits),
    updateEquation(operator),
    resetDigits()
  )(state)

export const inputOperatorPostExec = operator => state =>
  pipe(
    updateHistory(),
    resetEquation(),
    updateEquation(calculateEquation(state.equation)),
    updateEquation(operator)
  )(state)

export const inputExecute = () => state =>
  pipe(
    updateEquation(+state.digits),
    resetDigits(),
    didJustExecute()
  )(state)

export const inputExecutePostExec = () => state => pipe(didJustExecute())(state)

export const midStateChange = last => state =>
  pipe(
    didNotJustExecute(),
    updateLast(last)
  )(state)
