import { updateEquation, resetEquation } from '../equation'
import { initialState as init } from '../../state/constants'

const random = str => str.split('')[Math.floor(Math.random() * str.length)]
const numbers = '1234567890'
const operators = '÷×+-'
const ranNum = () => parseInt(random(numbers), 10)
const ranOp = () => random(operators)

describe('Equation state changes', () => {
  test('allows digits at even and operators at odd indexes', () => {
    let state = { ...init, equation: [] }
    for (let i = 0; i <= 6; i += 1) {
      const update = i % 2 === 0 ? ranNum() : ranOp()
      const expected = { ...state, equation: [...state.equation, update] }
      state = updateEquation(update)(state)
      expect(state).toStrictEqual(expected)
    }
  })

  describe('Updating with digits', () => {
    test('allows digits at 0 index', () => {
      const state = { ...init, equation: [] }
      const update = ranNum()
      const expected = { ...init, equation: [...state.equation, update] }
      expect(updateEquation(update)(state)).toStrictEqual(expected)
    })

    test('returns state if not digits at 0 index', () => {
      const state = { ...init, equation: [] }
      const update = ranOp()
      const expected = state
      expect(updateEquation(update)(state)).toStrictEqual(expected)
    })
  })

  describe('Updating with operators', () => {
    test('allows operator at 1 index', () => {
      const state = { ...init, equation: [1] }
      const update = ranOp()
      const expected = { ...state, equation: [...state.equation, update] }
      expect(updateEquation(update)(state)).toStrictEqual(expected)
    })

    test('returns state if not operator at 1 index', () => {
      const state = { ...init, equation: [1] }
      const update = ranNum()
      const expected = state
      expect(updateEquation(update)(state)).toStrictEqual(expected)
    })
  })

  describe('Resetting equation', () => {
    test('resetting equation will return initial state', () => {
      const state = { ...init, equation: [1, '+', 2, '÷'] }
      const expected = init
      expect(resetEquation()(state)).toStrictEqual(expected)
    })
  })
})
