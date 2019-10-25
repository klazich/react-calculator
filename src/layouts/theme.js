import { theme } from 'rebass'

const blue = '#07c'
const lightgray = '#f6f6ff'
const black = '#000e1a'
const white = '#fff'

export default {
  ...theme,
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue,
    lightgray,
    black,
    white,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Iosevka Web, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  buttons: {
    primary: {
      color: white,
      backgroundColor: blue,
    },
    outline: {
      color: blue,
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
    },
    '&:hover': {
      opacity: 0.8,
    },
  },
}
