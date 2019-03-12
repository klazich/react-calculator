import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

Box.displayName = 'Box'

export default Box

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0
}

export Heading
