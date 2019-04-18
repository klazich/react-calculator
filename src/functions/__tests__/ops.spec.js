import {
  updateAcc,
  resetAcc,
  updateNextFn,
  resetNextFn,
  didJustExecute,
} from '../ops'
import { initialState as init } from '../../state/constants'

describe('Operations state changes', () => {
  describe('Accumulator changes', () => {
    test('acc updates properly given an integer', () => {
      const state = {
        ...init,
        acc: 5,
        nextFn: y => 5 + y,
      }
      const expected = { ...state, acc: 7 }
      expect(updateAcc(2)(state)).toStrictEqual(expected)
    })
    test('acc updates properly given a float', () => {
      const state = {
        ...init,
        acc: 5,
        nextFn: y => 5 + y,
      }
      const expected = { ...state, acc: 7.71 }
      expect(updateAcc(2.71)(state)).toStrictEqual(expected)
    })
    test('resetting acc returns initial state', () => {
      const state = { ...init, acc: 5 }
      const expected = init
      expect(resetAcc()(state)).toStrictEqual(expected)
    })
  })

  describe('NextFn changes', () => {
    describe(`nextFn updates properly given '÷', '×', '+', '-'`, () => {
      test('division', () => {
        const state = { ...init, acc: 6 }
        const expected = x => 6 / x
        const { nextFn } = updateNextFn('÷')(state)
        expect(nextFn(2)).toEqual(expected(2))
      })
      test('multiplication', () => {
        const state = { ...init, acc: 6 }
        const expected = x => 6 * x
        const { nextFn } = updateNextFn('×')(state)
        expect(nextFn(2)).toEqual(expected(2))
      })
      test('addition', () => {
        const state = { ...init, acc: 6 }
        const expected = x => 6 + x
        const { nextFn } = updateNextFn('+')(state)
        expect(nextFn(2)).toEqual(expected(2))
      })
      test('subtraction', () => {
        const state = { ...init, acc: 6 }
        const expected = x => 6 - x
        const { nextFn } = updateNextFn('-')(state)
        expect(nextFn(2)).toEqual(expected(2))
      })
    })
    test('resetting nextFn returns initial state', () => {
      const state = { ...init, nextFn: x => x + 1 }
      const expected = x => x
      const { nextFn } = resetNextFn()(state)
      expect(nextFn(2)).toStrictEqual(expected(2))
    })
  })

  describe('DidExecute changes', () => {
    test('didJustExecute changes didExecute property to true', () => {
      const state = { ...init, didExecute: false }
      const expected = { ...state, didExecute: true }
      expect(didJustExecute()(state)).toStrictEqual(expected)
    })
  })
})
