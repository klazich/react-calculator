import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'rebass'

const Item = props => (
  <Text
    sx={{
      whiteSpace: 'nowrap',
    }}
    variant="screen"
    {...props}
  >
    {`${props.children}`}
  </Text>
)

Item.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}

export default Item
