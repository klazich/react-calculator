import React, { useContext } from 'react'
import { Flex } from 'rebass'

import Screen from './Screen'

import { useEquation } from '../../state/actions'
import { CalculatorDispatch } from '../context'

const style = {
  cursor: 'pointer',
  height: '26px',
  overflow: 'hidden',
  textOverflow: 'clip',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: 'DimGray',
  },
}

function Row({ children, id }) {
  const dispatch = useContext(CalculatorDispatch)

  return (
    <Screen
      px={2}
      py={1}
      width={1}
      color="DarkGray"
      onClick={() => dispatch(useEquation(id))}
      css={style}
    >
      {children}
    </Screen>
  )
}

const HistoryScreen = props => (
  <Flex flexWrap="wrap">
    {props.history.map((eq, id) => (
      <Row key={id} id={id}>
        {eq.join(' ')}
      </Row>
    ))}
  </Flex>
)

export default HistoryScreen
