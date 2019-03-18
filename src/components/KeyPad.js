import React from 'react'
import { Flex } from 'rebass'
import Key from './Key'

const KeyPad = ({ onKey }) => (
  <Flex flexWrap="wrap" bg="gainsboro" p={1} justifyContent="start">
    {/* row 1 */}
    <Key size={1} onKey={onKey} value={'C'} />
    <Key size={1} onKey={onKey} value={'⇦'} />
    <Key size={1} onKey={onKey} value={'%'} />
    <Key size={1} onKey={onKey} value={'÷'} />

    {/* row 2 */}
    <Key size={1} onKey={onKey} value={'7'} />
    <Key size={1} onKey={onKey} value={'8'} />
    <Key size={1} onKey={onKey} value={'9'} />
    <Key size={1} onKey={onKey} value={'×'} />

    {/* row 3 */}
    <Key size={1} onKey={onKey} value={'4'} />
    <Key size={1} onKey={onKey} value={'5'} />
    <Key size={1} onKey={onKey} value={'6'} />
    <Key size={1} onKey={onKey} value={'-'} />

    {/* row 4 */}
    <Key size={1} onKey={onKey} value={'1'} />
    <Key size={1} onKey={onKey} value={'2'} />
    <Key size={1} onKey={onKey} value={'3'} />
    <Key size={1} onKey={onKey} value={'+'} />

    {/* row 5 */}
    <Key size={1} onKey={onKey} value={'0'} />
    <Key size={1} onKey={onKey} value={'.'} />
    <Key size={2} onKey={onKey} value={'='} />
  </Flex>
)

export default KeyPad
