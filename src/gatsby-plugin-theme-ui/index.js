import preset from '@rebass/preset'

export default {
  ...preset,
  colors: {
    background: '#f6f6ff',
  },
  shadows: {
    card: '0 2px 10px rgba(0, 0, 0, 0.2)',
    keys: '0 2px 10px rgba(0, 0, 0, 0.4)',
  },
  text: {
    screen: {
      color: 'DimGrey',
      bg: 'background',
      fontFamily: 'Iosevka Web',
      fontWeight: 400,
      fontSize: 1,
      textAlign: 'right',
    },
    keyType: {
      fontFamily: 'Iosevka Web',
      fontSize: 5,
      fontWeight: 300,
    },
  },
  variants: {
    card: {
      p: 0,
      bg: 'background',
      boxShadow: 'card',
    },
    keyPad: {
      p: 0,
      bg: 'background',
      boxShadow: 'keys',
    },
  },
}
