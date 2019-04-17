export const DIGIT = 'DIGIT'
export const OPERATOR = 'OPERATOR'
export const CLEAR = 'CLEAR'
export const EXECUTE = 'EXECUTE'

export const initialState = {
  digits: '0',
  acc: null,
  nextFn: x => x,
  didExecute: false,
  equation: [],
  last: null,
}
