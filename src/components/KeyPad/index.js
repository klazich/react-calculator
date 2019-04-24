import React from 'react'
import { Flex } from 'rebass'

import Key from './Key'
import { keys } from '../../functions'

const isWideKey = k => ['=', '↤'].includes(k)

function KeyPad() {
  return (
    <Flex flexWrap="wrap" p={0} justifyContent="start">
      {keys.map((item, id) => (
        <Key size={isWideKey(item) ? 2 : 1} value={item} key={id} />
      ))}
    </Flex>
  )
}

export default KeyPad
