import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

function Screen(props) {
  const { children, size } = props

  const numDigitsToDisplay = size || Infinity
  const display = `${children}`.slice(0, numDigitsToDisplay)

  const style = {
    whiteSpace: 'nowrap',
  }

  return (
    <Text
      fontFamily="Iosevka Web"
      fontWeight={400}
      fontSize={1}
      textAlign="right"
      bg="#f6f6ff"
      color="DimGrey"
      css={style}
      {...props}
    >
      {display}
    </Text>
  )
}

Screen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  size: PropTypes.number,
}

export default Screen
