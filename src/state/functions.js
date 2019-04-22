import { didJustExecute, didNotJustExecute, updateLast } from '../functions'
import { updateDigits, resetDigits } from '../functions/digits'
import { updateEquation, resetEquation } from '../functions/equation'
import {
  updateAcc,
  updateNextFn,
  resetAcc,
  resetNextFn,
} from '../functions/ops'

const pipe = (...fns) => x => fns.reduce((a, f) => f(a), x)

export const inputDigit = state => digit => pipe(updateDigits(digit))(state)

export const inputDigitPostExec = state => digit =>
  pipe(
    resetAcc(),
    resetDigits(),
    resetNextFn(),
    resetEquation(),
    updateDigits(digit)
  )(state)

export const inputOperator = state => operator =>
  pipe(
    updateAcc(+state.digits),
    updateNextFn(operator),
    updateEquation(state.digits),
    updateEquation(`${operator}`),
    resetDigits()
  )(state)

export const inputOperatorPostExec = state => operator =>
  pipe(
    resetDigits(),
    resetEquation(),
    updateEquation(`${state.acc}`),
    updateEquation(`${operator}`),
    updateNextFn(operator)
  )(state)

export const inputExecute = state => () =>
  pipe(
    updateAcc(+state.digits),
    updateEquation(state.digits),
    updateEquation('='),
    resetDigits(),
    didJustExecute()
  )(state)

export const inputExecutePostExec = state => () => pipe(didJustExecute())(state)

export const midStateChange = state => last =>
  pipe(
    didNotJustExecute(),
    updateLast(last)
  )(state)
