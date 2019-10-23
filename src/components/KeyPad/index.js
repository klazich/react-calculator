import React from 'react'
import { Flex, Card } from 'rebass'

import Key from './Key'
import { keys } from '../../helpers'

const isWideKey = k => ['=', '↤'].includes(k)

function KeyPad() {
  return (
    <Card boxShadow="0 2px 10px rgba(0, 0, 0, 0.4)" bg="#f6f6ff">
      <Flex flexWrap="wrap" justifyContent="start">
        {keys.map((item, id) => (
          <Key size={isWideKey(item) ? 2 : 1} value={item} key={id} />
        ))}
      </Flex>
    </Card>
  )
}

export default KeyPad
