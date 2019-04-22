// prettier-ignore
export const keys = [
  'C', '⇦', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
]

export const is = {
  key: k => keys.includes(k),
  digit: k => /[0-9⇦.]/.test(k),
  zero: k => k === '0',
  backspace: k => k === '⇦',
  decimal: k => k === '.',
  clear: k => k === 'C',
  operator: k => /[÷×+-]/.test(k),
  execute: k => k === '=',
}

export const substituteKey = key => {
  const alt = ['/', '*', 'Escape', 'Backspace', 'Enter']
  const sub = ['÷', '×', 'C', '⇦', '=']
  return alt.includes(key) ? sub[alt.indexOf(key)] : key
}

export const didJustExecute = () => state => ({
  ...state,
  didExecute: true,
})

export const didNotJustExecute = () => state => ({
  ...state,
  didExecute: false,
})

export const updateLast = type => state => ({
  ...state,
  last: type,
})
