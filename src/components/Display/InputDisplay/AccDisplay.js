import React from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'

const AccDisplay = ({ children }) => (
  <Item
    sx={{
      overflow: 'hidden',
      textOverflow: 'clip',
    }}
    px={2}
    pb={1}
    fontWeight={600}
    fontSize={5}
  >
    {children}
  </Item>
)

AccDisplay.propTypes = {
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default AccDisplay
