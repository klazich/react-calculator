import React from 'react'
import { Flex, Card } from 'rebass'

import Key from './Key'

/* prettier-ignore */
export const keys = [
  'C', '↤', '÷',
  '7', '8', '9', '×',
  '4', '5', '6', '-',
  '1', '2', '3', '+',
  '0', '.', '=',
]

const isWideKey = k => ['=', '↤'].includes(k)

const KeyPad = () => (
  <Card variant="keyPad">
    <Flex flexWrap="wrap" justifyContent="start">
      {keys.map((item, id) => (
        <Key size={isWideKey(item) ? 2 : 1} value={item} key={id} />
      ))}
    </Flex>
  </Card>
)

export default KeyPad
