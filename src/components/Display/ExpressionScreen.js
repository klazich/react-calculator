import React from 'react'
import PropTypes from 'prop-types'

import Screen from './Screen'

const ExpressionScreen = ({ children }) => (
  <Screen
    sx={{
      height: '22px',
      overflow: 'hidden',
      textOverflow: 'clip',
    }}
    px={2}
    pt={1}
    color="Silver"
  >
    {children.join(' ')}
  </Screen>
)

ExpressionScreen.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
}

export default ExpressionScreen
