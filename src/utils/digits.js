function* InputDigits(init = '') {
  let digits = `${init}`
  let hasDecimal = digits.includes('.')

  while (true) {
    const d = yield digits

    if ((d === '.' && hasDecimal) || (d === '0' && digits === '') || !d) {
      continue
    }

    if (d === '.') {
      hasDecimal = true
    }

    digits += d
  }
}

export default InputDigits
