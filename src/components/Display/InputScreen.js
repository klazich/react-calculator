import React from 'react'
import PropTypes from 'prop-types'

import Screen from './Screen'

function InputScreen({ children }) {
  const style = {
    overflow: 'hidden',
    textOverflow: 'clip',
  }

  return (
    <Screen px={2} pb={1} fontWeight={600} fontSize={5} size={15} css={style}>
      {children}
    </Screen>
  )
}

InputScreen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
}

export default InputScreen
