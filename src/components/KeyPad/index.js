import React from 'react'
import { Flex, Card } from 'rebass'

import Key from './Key'
import { keys } from '../../helpers'

const isWideKey = (k) => ['=', '↤'].includes(k)

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
