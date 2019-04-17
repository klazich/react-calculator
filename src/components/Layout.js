import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

const Layout = props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)

export default Layout
