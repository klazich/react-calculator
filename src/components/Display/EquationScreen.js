import React from 'react'
import PropTypes from 'prop-types'

import Screen from './Screen'

function EquationScreen({ children }) {
  const style = {
    height: '22px',
    overflow: 'hidden',
    textOverflow: 'clip',
  }

  return (
    <Screen px={2} pt={1} color="Silver" css={style}>
      {children.join(' ')}
    </Screen>
  )
}

EquationScreen.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
}

export default EquationScreen
