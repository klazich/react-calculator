import React, { useEffect, useContext } from 'react'

import { CalculatorContext, action } from './CalculatorProvider'
import KeyPad from './KeyPad'
import Display from './Display'
import { is, substituteKey } from '../helpers'

function Calculator() {
  const { state, dispatch } = useContext(CalculatorContext)

  // eslint-disable-next-line no-undef
  console.log(state)

  const onKeyDown = event => {
    event.preventDefault()
    const key = substituteKey(event.key)
    if (is.key(key)) dispatch(action(key))
  }

  // useEffect hook to capture `keydown` events
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('keydown', onKeyDown, false)
    }
  })

  return (
    <main>
      <Display />
      <KeyPad />
    </main>
  )
}

export default Calculator
