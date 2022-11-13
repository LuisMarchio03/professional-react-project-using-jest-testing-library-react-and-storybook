import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      gray600: '#212121',

      yellow500: '#ffc107',
    },

    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3.125rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },

    fonts: {
      roboto: 'Roboto',
      poppins: 'Poppins',
    },
  },

  media: {
    bp_sm: '(min-width: 576px)',
    bp_md: '(min-width: 768px)',
    bp_lg: '(min-width: 992px)',
    bp_xl: '(min-width: 1200px)',
  },
})
