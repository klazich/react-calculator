import DigitsInput from './digits'
import OperationsInput from './operations'

const initGenerator = generator => (...args) => {
  const iter = generator(...args)
  iter.next()
  return iter
}

class Digits {
  constructor() {
    this.generator = initGenerator(DigitsInput)()
  }

  enter(d) {
    if (arguments.length < 1) throw new Error(`to few arguments`)
    return this.generator.next(d).value
  }

  get value() {
    return parseFloat(this.generator.next())
  }
}

class Operations {
  constructor() {
    this.generator = initGenerator(OperationsInput)()
    this.equation = x => x
  }

  enter(x, op) {
    if (arguments.length < 2) throw new Error(`to few arguments`)
    this.equation = this.generator.next({ x, op }).value
  }
}

class Input {
  constructor() {
    this.digits = new Digits()
    this.operations = new Operations()
    this.eq = null
  }

  enter(key) {
    if (/[0-9\.]/.test(key)) {
      this.digits.enter(key)
    }

    if (/[÷×+-]/.test(key)) {
      const op = key
      const value = this.digits.value
      this.eq = this.operations.enter(value, key)
    }
  }
}

export { Digits, Operations }

const d = new Digits()
console.log(d.enter('1'))
console.log(d.enter('9'))
console.log(d.enter())

const o = new Operations()

console.log(o.enter(4, '+'))
console.log(o.enter())
console.log(o.enter(2))
