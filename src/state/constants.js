export const DIGIT = 'DIGIT'
export const OPERATOR = 'OPERATOR'
export const CLEAR = 'CLEAR'
export const EXECUTE = 'EXECUTE'
export const USE_EQUATION = 'USE_EQUATION'

export const initialState = {
  digits: '0',
  didExecute: false,
  equation: [],
  history: Array(5).fill([]),
  last: null,
}
