import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import './layout.css'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Layout
