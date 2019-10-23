import { updateDigits, resetDigits } from '../digits'
import { initialState as init } from '../../constants'

const maxLength = 15

const random = str => str.split('')[Math.floor(Math.random() * str.length)]
const numbers = '1234567890'
const nonZero = '123456789'
const ranNum = () => random(numbers)
const ranNonZero = () => random(nonZero)
const makeSample = n => ranFn => Array.from({ length: n }, () => ranFn())
const nRanDigits = n => makeSample(n)(ranNonZero).join('')

describe('updateDigits', () => {
  describe(`1, 2, 3, 4, 5, 6, 7, 8, 9, 0`, () => {
    describe(`Input number digit will append it to digits property when digits is non-zero`, () => {
      const sample = makeSample(10)(ranNum)

      sample.forEach(input => {
        const digits = nRanDigits(2)
        const state = { ...init, digits }

        test(`${digits} ${input} => ${digits}${input}`, () => {
          const expected = { ...state, digits: `${digits}${input}` }
          expect(updateDigits(input)(state)).toStrictEqual(expected)
        })
      })
    })

    describe(`Edge cases`, () => {
      describe(`Input number digit will replace the digits property when digits is zero`, () => {
        const sample = makeSample(10)(ranNum)

        sample.forEach(input => {
          const digits = '0'
          const state = { ...init, digits }

          test(`${digits} ${input} => ${input}`, () => {
            const expected = { ...state, digits: input }
            expect(updateDigits(input)(state)).toStrictEqual(expected)
          })
        })
      })

      describe(`Input number digit will not append when digits property is at max length`, () => {
        const sample = makeSample(10)(ranNum)

        sample.forEach(input => {
          const digits = nRanDigits(maxLength)
          const state = { ...init, digits }

          test(`${digits} ${input} => ${digits}`, () => {
            const expected = state
            expect(updateDigits(input)(state)).toStrictEqual(expected)
          })
        })
      })
    })

    xtest(`will append a digit to the digits property`, () => {
      const state = { ...init, digits: '45' }
      const tests = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
      tests.forEach(e => {
        const expected = { ...state, digits: state.digits + e }
        expect(updateDigits(e)(state)).toStrictEqual(expected)
      })
    })

    xtest(`no leading zeros on appending a digit when digits state is '0'`, () => {
      const state = { ...init, digits: '0' }
      const expected = { ...state, digits: '4' }
      expect(updateDigits('4')(state)).toStrictEqual(expected)
    })
  })

  describe(`Updating with '0'`, () => {
    xtest(`wont append '0' when digits state is also '0'`, () => {
      const state = { ...init, digits: '0' }
      const expected = state
      expect(updateDigits('0')(state)).toStrictEqual(expected)
    })

    xtest(`will append '0' when digits state is not '0'`, () => {
      const state = { ...init, digits: '10' }
      const expected = { ...state, digits: '100' }
      expect(updateDigits('0')(state)).toStrictEqual(expected)
    })
  })

  describe(`Updating with '.'`, () => {
    xtest(`wont append '.' when digits state already includes a decimal`, () => {
      const state = { ...init, digits: '1.45' }
      const expected = state
      expect(updateDigits('.')(state)).toStrictEqual(expected)
    })

    xtest(`will append '.' when digits state does not include a decimal`, () => {
      const state = { ...init, digits: '1' }
      const expected = { ...state, digits: '1.' }
      expect(updateDigits('.')(state)).toStrictEqual(expected)
    })

    xtest(`will have zero placeholder on appending '.' when digits state is '0'`, () => {
      const state = { ...init, digits: '0' }
      const expected = { ...state, digits: '0.' }
      expect(updateDigits('.')(state)).toStrictEqual(expected)
    })
  })

  describe(`Updating with '⇦'`, () => {
    xtest(`will backspace digits state when '↤' is update`, () => {
      const state = { ...init, digits: '234' }
      const expected = { ...state, digits: '23' }
      expect(updateDigits('↤')(state)).toStrictEqual(expected)
    })

    xtest(`will be '0' on backspace when digits state length is one`, () => {
      const state = { ...init, digits: '9' }
      const expected = { ...state, digits: '0' }
      expect(updateDigits('↤')(state)).toStrictEqual(expected)
    })
  })

  describe(`Resetting digits`, () => {
    xtest(`resetting digits will return the initial state`, () => {
      const state = { ...init, digits: '234.5' }
      const expected = init
      expect(resetDigits()(state)).toStrictEqual(expected)
    })
  })
})
