import { initGenerator, value } from '.'

export function* DigitInput() {
  let digits = ''
  let hasDecimal = false

  while (true) {
    const d = yield digits

    if ((d === '.' && hasDecimal) || (d === '0' && digits === '') || !d)
      continue
    if (d === '.') hasDecimal = true

    digits += d
  }
}

const Digits = () => initGenerator(DigitInput)()

export default Digits

const d1 = Digits()
const d2 = Digits()

console.log('d1', value(d1.next('1')))
console.log('d2', value(d2.next('9')))
console.log('d2', value(d2.next('.')))
console.log('d1', value(d1.next('3')))
console.log('d2', value(d2.next('3')))
