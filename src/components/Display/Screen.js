import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const Screen = props => (
  <Text
    sx={{
      whiteSpace: 'nowrap',
    }}
    variant="screen"
    {...props}
  >
    {`${props.children}`.slice(0, props.size || Infinity)}
  </Text>
)

Screen.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  size: PropTypes.number,
}

export default Screen
