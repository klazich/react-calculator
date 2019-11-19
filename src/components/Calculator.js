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

  // useEffect hook to capture `keydown` events
  useEffect(() => {
    const handleKeyDown = event => {
      event.preventDefault()
      // substitute keydown event key with value used in reducer.
      const value = subValue[event.key] || event.key
      if (/^[0-9C↤.=÷×+-]$/.test(`${value}`)) dispatch(action(value))
    }
    // eslint-disable-next-line no-undef
    document.addEventListener('keydown', handleKeyDown, false)
    return () => {
      // eslint-disable-next-line no-undef
      document.removeEventListener('keydown', handleKeyDown, false)
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
