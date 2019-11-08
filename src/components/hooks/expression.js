import { useState } from 'react'

import { useAccumulator } from './accumulator'

const OPERAND = 'OPERAND'
const OPERATOR = 'OPERATOR'

const append = (arr, v) => [...arr, v]
const change = (arr, v) => [...arr.slice(0, -1), v]

export const useExpression = () => {
  const [accumulator, apiAccumulator] = useAccumulator()
  const [tokens, setTokens] = useState([accumulator])

  const from = newTokens => setTokens(newTokens)

  const update = key => {
    if (/[0-9.↤]/.test(key)) {
      apiAccumulator.update(key)
    }
    if (/[÷×+-]/.test(key)) {
      setTokens(append(append(tokens, accumulator), key))
      apiAccumulator.reset()
    }
  }

  const state =
    tokens.length % 2 === 0
      ? append(tokens, accumulator)
      : change(tokens, accumulator)

  const api = { from, update }

  return [state, api]
}
