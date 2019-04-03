import React from 'react'
import { Flex } from 'rebass'
import Key from './Key'

function KeyPad({ handleOnClick }) {
  const keys = [
    'C',
    '⇦',
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ]

  return (
    <Flex flexWrap="wrap" bg="gainsboro" p={1} justifyContent="start">
      {keys.map((item, id) => (
        <Key
          size={item === '=' ? 2 : 1}
          value={item}
          key={id}
          handleOnClick={handleOnClick}
        />
      ))}
    </Flex>
  )
}

// const KeyPad = ({ handleOnClick }) => (
//   <Flex flexWrap="wrap" bg="gainsboro" p={1} justifyContent="start">
//     {/* row 1 */}
//     <Key size={1} handleOnClick={handleOnClick} value={'C'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'⇦'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'%'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'÷'} />

//     {/* row 2 */}
//     <Key size={1} handleOnClick={handleOnClick} value={'7'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'8'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'9'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'×'} />

//     {/* row 3 */}
//     <Key size={1} handleOnClick={handleOnClick} value={'4'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'5'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'6'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'-'} />

//     {/* row 4 */}
//     <Key size={1} handleOnClick={handleOnClick} value={'1'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'2'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'3'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'+'} />

//     {/* row 5 */}
//     <Key size={1} handleOnClick={handleOnClick} value={'0'} />
//     <Key size={1} handleOnClick={handleOnClick} value={'.'} />
//     <Key size={2} handleOnClick={handleOnClick} value={'='} />
//   </Flex>
// )

export default KeyPad
