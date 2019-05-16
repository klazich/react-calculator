import {
  calculateEquation,
  didJustExecute,
  didNotJustExecute,
  updateLast,
} from '../functions'
import { initialState as init } from '../../state/constants'

describe('didExecute state change', () => {
  test('didJustExecute sets didExecute to true', () => {
    const state = { ...init, didExecute: false }
    const expected = { ...state, didExecute: true }
    expect(didJustExecute()(state)).toStrictEqual(expected)
  })

  test('didNotJustExecute sets didExecute to false', () => {
    const state = { ...init, didExecute: true }
    const expected = { ...state, didExecute: false }
    expect(didNotJustExecute()(state)).toStrictEqual(expected)
  })
})

describe('last state change', () => {
  const random = arr => arr[Math.floor(Math.random() * arr.length)]
  const types = ['DIGIT', 'OPERATOR', 'EXECUTE', 'CLEAR']
  const randomType = () => random(types)

  test('updateLast sets a new value to last', () => {
    const state = { ...init, last: null }
    const update = randomType()
    const expected = { ...state, last: update }
    expect(updateLast(update)(state)).toStrictEqual(expected)
  })
})

describe('Calculating acc from equation array', () => {
  test('calculateEquation', () => {
    const equation = [1, '+', 8, '-', 3]
    const expected = 1 + 8 - 3
    expect(calculateEquation(equation)).toStrictEqual(expected)
  })
})
