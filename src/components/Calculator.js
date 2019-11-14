import React, { useEffect, useContext } from 'react'

import { CalculatorContext, action } from './CalculatorProvider'
import KeyPad from './KeyPad'
import Display from './Display'

function Calculator() {
  const { dispatch } = useContext(CalculatorContext)

  const onKeyDown = event => {
    event.preventDefault()
    const value =
      {
        '/': '÷',
        '*': '×',
        Escape: 'C',
        Backspace: '↤',
        Enter: '=',
      }[event.key] || event.key
    if (/^[0-9C↤.=÷×+-]$/.test(`${value}`)) dispatch(action(value))
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
