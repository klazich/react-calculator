import React, { useEffect, useContext } from 'react'

import { CalculatorContext, action } from './CalculatorProvider'
import KeyPad from './KeyPad'
import Display from './Display'

const subValue = {
  '/': '÷',
  '*': '×',
  Escape: 'C',
  Backspace: '↤',
  Enter: '=',
}

function Calculator() {
  const { dispatch } = useContext(CalculatorContext)

  const handleKeyDown = event => {
    event.preventDefault()
    const value = subValue[event.key] || event.key
    if (/^[0-9C↤.=÷×+-]$/.test(`${value}`)) dispatch(action(value))
  }

  // useEffect hook to capture `keydown` events
  useEffect(() => {
    // eslint-disable-next-line no-undef
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('keydown', handleKeyDown, false)
    }
  }, [])

  return (
    <main>
      <Display />
      <KeyPad />
    </main>
  )
}

export default Calculator
