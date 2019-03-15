import React, { useState } from 'react'
import KeyPad from './KeyPad'
import Screen from './Screen'
import Key from './Key'

// https://blog.usejournal.com/everything-react-first-app-188b33a880ca

function Calculator() {
  const [equation, setEquation] = useState([])
  const [result, setResult] = useState('')
  const [value, setValue] = useState('')

  // const ops = ['CLR', 'DEL', 'PER', 'DIV', 'MUL', 'SUB', 'ADD', 'DEC', 'EXC']
  const ops = {
    CLR: () => setValue(''),
    DEL: () => setValue(parseInt(`${value}`.slice(0, -1))),
    DIV: () => a => b => a / b,
  }

  const parseOp = op => ops[op]()

  const handleOnKey = v =>
    Object.keys(ops).includes(v)
      ? parseOp(v)
      : setValue(parseInt(`${value}${v}`, 10))

  return (
    <main>
      <Screen>{value}</Screen>
      <KeyPad onKey={v => handleOnKey(v)} />
    </main>
  )
}

export default Calculator
