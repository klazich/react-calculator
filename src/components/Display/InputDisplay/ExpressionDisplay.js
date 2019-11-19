import React from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

const ExpressionDisplay = ({ children }) => (
  <Item
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
  </Item>
)

ExpressionDisplay.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
}

export default ExpressionDisplay
