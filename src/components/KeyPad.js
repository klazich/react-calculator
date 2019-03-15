import React from 'react'
import { Flex } from 'rebass'
import Key from './Key'

const KeyPad = ({ onKey }) => (
  <Flex flexWrap="wrap" bg="gainsboro" p={1} justifyContent="start">
    {/* row 1 */}
    <Key size={1} onKey={onKey} value={'CLR'}>
      C
    </Key>
    <Key size={1} onKey={onKey} value={'DEL'}>
      &larr;
    </Key>
    <Key size={1} onKey={onKey} value={'PER'}>
      %
    </Key>
    <Key size={1} onKey={onKey} value={'DIV'}>
      ÷
    </Key>

    {/* row 2 */}
    <Key size={1} onKey={onKey} value={7}>
      7
    </Key>
    <Key size={1} onKey={onKey} value={8}>
      8
    </Key>
    <Key size={1} onKey={onKey} value={9}>
      9
    </Key>
    <Key size={1} onKey={onKey} value={'MUL'}>
      ×
    </Key>

    {/* row 3 */}
    <Key size={1} onKey={onKey} value={4}>
      4
    </Key>
    <Key size={1} onKey={onKey} value={5}>
      5
    </Key>
    <Key size={1} onKey={onKey} value={6}>
      6
    </Key>
    <Key size={1} onKey={onKey} value={'SUB'}>
      -
    </Key>

    {/* row 4 */}
    <Key size={1} onKey={onKey} value={1}>
      1
    </Key>
    <Key size={1} onKey={onKey} value={2}>
      2
    </Key>
    <Key size={1} onKey={onKey} value={3}>
      3
    </Key>
    <Key size={1} onKey={onKey} value={'ADD'}>
      +
    </Key>

    {/* row 5 */}
    <Key size={1} onKey={onKey} value={0}>
      0
    </Key>
    <Key size={1} onKey={onKey} value={'DEC'}>
      .
    </Key>
    <Key size={2} onKey={onKey} value={'EXC'}>
      =
    </Key>
  </Flex>
)

export default KeyPad
