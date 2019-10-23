import { updateDigits, resetDigits } from '../digits'
import { initialState as init } from '../../state/constants'

describe('Digits state changes', () => {
  describe(`Updating with 1, 2, 3, 4, 5, 6, 7, 8, 9, 0`, () => {
    test(`will append a digit to the digits property`, () => {
      const state = { ...init, digits: '45' }
      const tests = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      tests.forEach(e => {
        const expected = { ...state, digits: state.digits + e }
        expect(updateDigits(e)(state)).toStrictEqual(expected)
      })
    })

    test(`no leading zeros on appending a digit when digits state is '0'`, () => {
      const state = { ...init, digits: '0' }
      const expected = { ...state, digits: '4' }
      expect(updateDigits('4')(state)).toStrictEqual(expected)
    })
  })

  describe(`Updating with '0'`, () => {
    test(`wont append '0' when digits state is also '0'`, () => {
      const state = { ...init, digits: '0' }
      const expected = state
      expect(updateDigits('0')(state)).toStrictEqual(expected)
    })

    test(`will append '0' when digits state is not '0'`, () => {
      const state = { ...init, digits: '10' }
      const expected = { ...state, digits: '100' }
      expect(updateDigits('0')(state)).toStrictEqual(expected)
    })
  })

  describe(`Updating with '.'`, () => {
    test(`wont append '.' when digits state already includes a decimal`, () => {
      const state = { ...init, digits: '1.45' }
      const expected = state
      expect(updateDigits('.')(state)).toStrictEqual(expected)
    })

    test(`will append '.' when digits state does not include a decimal`, () => {
      const state = { ...init, digits: '1' }
      const expected = { ...state, digits: '1.' }
      expect(updateDigits('.')(state)).toStrictEqual(expected)
    })

    test(`will have zero placeholder on appending '.' when digits state is '0'`, () => {
      const state = { ...init, digits: '0' }
      const expected = { ...state, digits: '0.' }
      expect(updateDigits('.')(state)).toStrictEqual(expected)
    })
  })

  describe(`Updating with '⇦'`, () => {
    test(`will backspace digits state when '↤' is update`, () => {
      const state = { ...init, digits: '234' }
      const expected = { ...state, digits: '23' }
      expect(updateDigits('↤')(state)).toStrictEqual(expected)
    })

    test(`will be '0' on backspace when digits state length is one`, () => {
      const state = { ...init, digits: '9' }
      const expected = { ...state, digits: '0' }
      expect(updateDigits('↤')(state)).toStrictEqual(expected)
    })
  })

  describe(`Resetting digits`, () => {
    test(`resetting digits will return the initial state`, () => {
      const state = { ...init, digits: '234.5' }
      const expected = init
      expect(resetDigits()(state)).toStrictEqual(expected)
    })
  })
})
