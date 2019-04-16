import React from 'react'
import { Flex } from 'rebass'
import Key from './Key'

import { keys } from '../state/functions'

function KeyPad() {
  return (
    <Flex flexWrap="wrap" bg="gainsboro" p={1} justifyContent="start">
      {keys.map((item, id) => (
        <Key size={item === '=' ? 2 : 1} value={item} key={id} />
      ))}
    </Flex>
  )
}

export default KeyPad
