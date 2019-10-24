import React from 'react'
import PropTypes from 'prop-types'

import Screen from './Screen'

const InputScreen = ({ children }) => (
  <Screen
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
  </Screen>
)

InputScreen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default InputScreen
